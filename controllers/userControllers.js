const axios = require('axios')
const { User } = require('../models')
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
const SCOPES = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/calendar']
const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

module.exports = {

  async createGoogleUser(code) {
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

const addUserToDB = async user => {
  console.log('adding new user to db')
  let response = new Promise((resolve, reject) => {
    User.create(user)
      .then(() => resolve({ google_id: user.google_id, username: user.username }))
      .catch(e => reject(e))
  })
  return response
}