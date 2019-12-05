const { Google, Calendar } = require('../controllers')
const { User } = require('../models')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/google/calendar/:google_id', (req, res) => {
    User.findOne({ where: { google_id: req.params.google_id } })
      .then(user => res.json(user))
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

  app.get('/google/user/:google_id', (req, res) => {
    Google.checkAccessToken(req.params.google_id)
      .catch(e => console.log(e))
    res.sendStatus(200)
  })

}