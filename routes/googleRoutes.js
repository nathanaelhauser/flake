const { Google } = require('../controllers')
const { User } = require('../models')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/google/calendar/:google_id', (req, res) => {
    console.log(`${req.params.google_id}`)
    // Get oauth2 tokens from db using gooogle_id
    User.findOne({ where: { google_id: req.params.google_id } })
    // Using oauth2 tokens, get calendar events for user
    .then(({ dataValues: { access_token, refresh_token, expiry_date } }) => 
      Google.getCalendarEvents({ access_token, refresh_token, expiry_date, token_type: 'Bearer' }))
    .then(events => res.json(events))
    .catch(e => console.log(e))
  })

  // Get authorization URL from google using redirect URL
  app.get('/google/auth', (req, res) => {
    console.log('getting authorization')
    // `${req.protocol}://${req.get('host')}/Home` is redirect URL
    Google.getAuthURL(`${req.protocol}://${req.get('host')}/Home`)
      .then(authURL => res.send(authURL))
      .catch(e => console.log(e))
  })

}