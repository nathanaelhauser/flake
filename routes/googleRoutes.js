const { Google } = require('../controllers')
const { User } = require('../models')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/google/calendar/:google_id', (req, res) => {
    // Get oauth2 tokens from db using gooogle_id
    User.findOne({ where: { google_id: req.params.google_id } })
    // Using oauth2 tokens, get calendar events for user
    .then(({ dataValues: { access_token, refresh_token, expiry_date } }) => 
      Google.getCalendarEvents({ access_token, refresh_token, expiry_date, token_type: 'Bearer' }))
    .then(events => res.json(events))
    .catch(e => console.log(e))
  })

  // Using web location provided by client to make redirectURL
  //  get an authURL from google
  app.post('/google/auth', (req, res) => {
    console.log('getting authorization')
    Google.getAuthURL(req.body.location)
      .then(authURL => {
        res.send({authURL})
      })
      .catch(e => console.log(e))
  })

}