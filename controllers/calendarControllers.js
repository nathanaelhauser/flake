/*

https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=116685853039-js0avd7jre5dsa0uei33vb8q3plfoqpp.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcalendar_events


https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=998073850415-0cmjdj8c1la7vhikn3rgohvq9ai74qom.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob


*/
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

module.exports = {

  async getTokens(code) {
    console.log('getting tokens')
    let response = new Promise((resolve, reject) => {

      client.getToken(code)
        .then(({ tokens }) => {
          resolve(tokens)
        })
        .catch(e => reject(e))
    })
    return response
  },

  async getEvents(tokens, calendarId = 'primary', maxResults = 10, orderBy = 'startTime') {
    console.log('getting events')
    let response = new Promise((resolve, reject) => {
      console.log(tokens)
      client.setCredentials(tokens)
      console.log('set credentials')
      const calendar = google.calendar({ version: 'v3', auth: client })
      console.log('created calendar')

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

  async getAuthURL(currentURL) {
    return await client.generateAuthUrl({
      redirect_uri: `${currentURL}/calendar_events`,
      scope: SCOPES
    })
  }

}