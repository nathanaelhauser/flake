const axios = require('axios')
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
const SCOPES = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/calendar']
const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

module.exports = {

  async createUser(code) {
    let userID = ''
    getTokens(code)
      .then(tokens => getUserInfo(tokens))
      .then(hotdog => userID = hotdog)
      .catch(e => console.log(e))
    return userID
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
      .then(data => {
        console.log(data)
        resolve('hello')
      })
      .catch(e => reject(e))
  })
  return response
}

const addUserToDB = async user => {
  axios.post('')
}