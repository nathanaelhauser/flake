const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')

const SCOPES = ['https://www.googleapis.com/auth/calendar']

const TOKEN_PATH = 'token.json'

fs.readFile('creds.json', (err, data) => {
  if (err) {
    console.log('Error loading client secret file: ', err)
  }
  authorize(JSON.parse(data), listEvents)
})

const authorize = (creds, cb) => {
  const { client_secret, client_id, redirect_uris } = creds.installed
  const oAuth2Client = new google.auth.OAuth2( client_id, client_secret, redirect_uris[0])

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) {
      return getAccessToken(oAuth2Client, cb)
    }
    oAuth2Client.setCredentials(JSON.parse(token))
    cb(oAuth2Client)
  })
}

const getAccessToken = (oAuth2Client, cb) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting the url: ', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        console.error('Error retrieving access token ', err)
      }
      oAuth2Client.setCredentials(token)
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) {
          console.error(err)
        }
        console.log('Token stored to ', TOKEN_PATH)
      })
      cb(oAuth2Client)
    })
  })
}

const listEvents = auth => {
  const calendar = google.calendar({version: 'v3', auth})
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime' 
  }, (err, res) => {
    if (err) {
      console.log('The API returned an error: ', err)
    }
    const events = res.data.items
    console.log(events)
    if (events.length) {
      console.log('Upcoming 10 events: ')
      events.map((event, i) => {
        const start = event.start.dataTime || event.start.date
        console.log(`${start} - ${event.summary}`)
      })
    } else {
      console.log('No upcoming events found.')
    }
  })
}