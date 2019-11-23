const { Event } = require('../models')

module.exports = app => {

  // GET all events (read)
  app.get('/events', (req, res) => {
    Event.findAll({ include: Excuse })
      .then(events => res.json(events))
      .catch(e => console.error(e))
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
