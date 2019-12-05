const { CalendarControllers } = require('../controllers')

module.exports = app => {

  // Get calendar events from google calendar api for user
  app.get('/calendar_events/', (req, res) => {
    console.log('inside calendar events')
    CalendarControllers.getTokens(req.query['code'])
      .then(tokens =>{
        console.log('got tokens, getting events')
        return CalendarControllers.getEvents(tokens)
      })
      .then(events => {
        console.log('got events, returning events')
        res.json(events)
      })
      .catch(e => console.log(e))
  })

  app.post('/calendar_auth', (req, res) => {
    console.log('getting authorization')
    console.log(req.body.location)
    CalendarControllers.getAuthURL(req.body.location)
      .then(authURL => {
        res.send({authURL})
      })
      .catch(e => console.log(e))
  })

}