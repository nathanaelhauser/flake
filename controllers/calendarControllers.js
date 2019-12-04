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
      redirect_uri: `${currentURL}calendar_events`,
      scope: SCOPES
    })
  }

}