const { Google } = require('../controllers')
const { User } = require('../models')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/google/calendar/:google_id', (req, res) => {
    User.findOne({ where: { google_id: req.params.google_id } })
    .then(({ dataValues: { access_token, refresh_token, expiry_date } }) => 
      Google.getCalendarEvents({ access_token, refresh_token, expiry_date, token_type: 'Bearer' }))
    .then(events => res.json(events))
    .catch(e => console.log(e))
  })

  app.post('/google/auth', (req, res) => {
    console.log('getting authorization')
    Google.getAuthURL(req.body.location)
      .then(authURL => {
        res.send({authURL})
      })
      .catch(e => console.log(e))
  })

}