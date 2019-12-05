const axios = require('axios')
const { User } = require('../models')
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
const SCOPES = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/calendar']
const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

module.exports = {

  async loginGoogleUser(code) {
    let userID = ''
    let response = new Promise((resolve, reject) => {
      getTokens(code)
        .then(tokens => getUserInfo(tokens))
        .then(userData => {
          const { id: google_id, name: username, picture, access_token, refresh_token, id_token, expiry_date } = userData
          const user = { google_id, username, picture, access_token, refresh_token, id_token, expiry_date: JSON.stringify(expiry_date) }
          return addUserToDB(user)
        })
        .then(data => resolve(data))
        .catch(e => reject(e))
    })
    return response
  },

  async getAuthURL(currentURL) {
    return await client.generateAuthUrl({
      redirect_uri: `${currentURL}Home`,
      scope: SCOPES,
      prompt: 'consent',
      access_type: 'offline'
    })
  },

  async getCalendarEvents(tokens) {
    let response = new Promise((resolve, reject) => {
      client.setCredentials(tokens)
      const calendar = google.calendar({ version: 'v3', auth: client })
      calendar.events.list({
        calendarId: 'primary',
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

const getUserInfo = async tokens => {
  console.log('getting user info')
  let response = new Promise((resolve, reject) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`)
      .then(({ data }) => resolve({...data, ...tokens}))
      .catch(e => reject(e))
  })
  return response
}

const addUserToDB = async data => {
  let response = new Promise((resolve, reject) => {
    console.log(data)
    User.findOne({ where: { google_id: data.google_id } })
      .then(user => {
        if (!user) {
          console.log('adding new user to db')
          User.create(user)
            .catch(e => reject(e))
        } else {
          console.log('user already in db')
          const { access_token, refresh_token, expiry_date, id_token } = data
          user.update({ access_token, refresh_token, expiry_date, id_token })
            .catch(e => reject(e))
        }
        resolve({ google_id: user.google_id, username: user.username })
      })
      .catch(e => reject(e))
  })
  return response
}