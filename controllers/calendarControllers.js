/*

https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=116685853039-js0avd7jre5dsa0uei33vb8q3plfoqpp.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ftest

*/
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

module.exports = {

  async getTokens(code) {
    let response = new Promise((resolve, reject) => {
      client.getToken(code)
        .then(({ tokens }) => resolve(tokens))
        .catch(e => reject(e))
    })
    return response
  },

  async getEvents(tokens, calendarId = 'primary', maxResults = 10, orderBy = 'startTime') {
    let response = new Promise((resolve, reject) => {
      console.log(tokens)
      resolve('blah')
      client.setCredentials(tokens)
      const calendar = google.calendar({version: 'v3', client})
      calendar.events.list({
        calendarId: calendarId,
        timeMin: (new Date()).toISOString(),
        maxResults: maxResults,
        singleEvents: true,
        orderBy: orderBy
      })
        .then(res => resolve(res.data.items))
        .catch(e => reject(e))
    })
    return response
  }

}