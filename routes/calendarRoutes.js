const { Calendar } = require('../controllers')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/calendar_events', (req, res) => {
    console.log('inside calendar events')
    Calendar.getTokens(req.body.code)
      .then(tokens => Calendar.getEvents(tokens))
      .then(events => res.json(events))
      .catch(e => console.log(e))
  })

}