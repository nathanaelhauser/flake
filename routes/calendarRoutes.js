const { Calendar } = require('../controllers')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/calendar_events', (req, res) => {
    console.log('inside calendar events')
    Calendar.getTokens(req.query['code'])
      .then(tokens =>{
        console.log('got tokens, getting events')
        return Calendar.getEvents(tokens)
      })
      .then(events => {
        console.log('got events, returning events')
        res.json(events)
      })
      .catch(e => console.log(e))
  })

}