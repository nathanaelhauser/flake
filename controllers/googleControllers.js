const axios = require('axios')
const { User } = require('../models')
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
const SCOPES = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/calendar']
// THIS IS FOR HEROKU DEPLOYMENT
// const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, 'https://tranquil-reef-16365.herokuapp.com/Home')
const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

module.exports = {

  async loginGoogleUser(code) {
    let response = new Promise((resolve, reject) => {
      // Using access code provided by google authURL
      //  to REDIRECT_URL
      getTokens(code)
        .then(tokens => getUserInfo(tokens))
        .then(userData => {
          // Change names of object keys to fit db naming
          const { id: google_id, name: username, picture, access_token, refresh_token, id_token, expiry_date } = userData
          const user = { google_id, username, picture, access_token, refresh_token, id_token, expiry_date: JSON.stringify(expiry_date) }
          return addUserToDB(user)
        })
        .then(data => resolve(data))
        .catch(e => reject(e))
    })
    return response
  },

  // Get an authURL from google
  async getAuthURL(redirect_uri) {
    // THIS IS FOR HEROKU DEPLOYMENT
    // const redirect_uri = 'https://tranquil-reef-16365.herokuapp.com/Home'
    return await client.generateAuthUrl({
      redirect_uri,
      scope: SCOPES,
      prompt: 'consent',
      access_type: 'offline'
    })
  },

  async getCalendars(tokens) {
    let response = new Promise((resolve, reject) => {
      client.setCredentials(tokens)
      resolve(google.calendar({ version: 'v3', auth: client }).calendarList.list())
    })
    return response
  },

  // Get calendar events from google calendar using
  //  oauth2 tokens
  async getCalendarEvents(calendarId, tokens) {
    let response = new Promise((resolve, reject) => {
      // Tokens required for oauth2
      client.setCredentials(tokens)
      const calendar = google.calendar({ version: 'v3', auth: client })
      // Get events from calendar api
      calendar.events.list({
        calendarId,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
      })
        .then(res => resolve(res.data.items))
        .catch(e => reject(e))
    })
    return response
  },

  // ------ Not working currently ------
  // Check if access token stored in db is expired
  //  if expired, then renew otherwise return
  async checkAccessToken(google_id) {
    let response = new Promise((resolve, reject) => {
      User.findOne({ where: { google_id }})
        .then(user => {
          // if (Date() < (user.dataValues.expiry_date - 60)) {
          //   resolve()
          // }
          axios.post('https://oauth2.googleapis.com/oauth2/v4/token', {
            refresh_token: user.dataValues.refresh_token,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'refresh_token'
          })
            .then(creds => {
              console.log(creds)
              resolve()
            })
            .catch(e => reject(e))
        })
        .catch(e => reject(e))
    })
    return response
  }

}

// Using access code from google
//  get oauth2 tokens from google
const getTokens = async code => {
  console.log('getting tokens')
  let response = new Promise((resolve, reject) => {
    client.getToken(code)
      .then(({ tokens }) => {
        resolve(tokens)
      })
      .catch(e => reject(e))
  })
  return response
}

// Using oauth2 tokens, make google api call to
//  get user profile info
const getUserInfo = async tokens => {
  console.log('getting user info')
  let response = new Promise((resolve, reject) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`)
      .then(({ data }) => resolve({...data, ...tokens}))
      .catch(e => reject(e))
  })
  return response
}

// Add user to db or update user in db
const addUserToDB = async data => {
  let response = new Promise((resolve, reject) => {
    console.log(data)
    // Try to find user in db using google_id
    User.findOne({ where: { google_id: data.google_id } })
      .then(user => {
        // If user doesn't exist in db
        if (!user) {
          console.log('adding new user to db')
          // Create new user in db
          User.create(data)
            .catch(e => reject(e))
        } else {
          console.log('user already in db')
          // Update tokens for user in db
          const { access_token, refresh_token, expiry_date, id_token } = data
          user.update({ access_token, refresh_token, expiry_date, id_token })
            .catch(e => reject(e))
        }
        // Send back google_id and username for Home page rendering
        resolve({ google_id: data.google_id, username: data.username })
      })
      .catch(e => reject(e))
  })
  return response
}