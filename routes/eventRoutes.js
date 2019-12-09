const { Event, User, Excuse } = require('../models')

module.exports = app => {

  // GET all events (read)
  app.get('/events', (req, res) => {
    Event.findAll({ include: Excuse })
      .then(events => res.json(events))
      .catch(e => console.error(e))
  })

  // GET events for specific user
  app.get('/events/user/:google_id', (req, res) => {
    Event.findAll({ include: Excuse, where: { user_id: req.params.google_id }})
      .then(events => res.json(events))
      .catch(e => console.log(e))
  })

  // GET events for specific excuse
  app.get('/events/excuse/:id', (req, res) => {
    Event.findAll({ include: Excuse, where: { excuseId: req.params.id }})
      .then(events => res.json(events))
      .catch(e => console.log(e))
  })

  // POST one event (create)
  app.post('/events', (req, res) => {
    Event.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // PUT on event (update)
  app.put('/events/:id', (req, res) => {
    Event.findOne({ where: { id: parseInt(req.params.id) } })
      .then(events => events.update({ isDone: !events.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE one event (delete)
  app.delete('/events/:id', (req, res) => {
    Event.findOne({ where: { id: parseInt(req.params.id) } })
      .then(events => events.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
