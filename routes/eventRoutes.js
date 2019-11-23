const { Event } = require('../models')

module.exports = app => {

  app.get('/events', (req, res) => {
    Event.findAll()
      .then(events => res.json(events))
      .catch(e => console.error(e))
  })

  app.post('/events', (req, res) => {
    Event.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/events/:id', (req, res) => {
    Event.findOne({ where: { id: parseInt(req.params.id) } })
      .then(events => events.update({ isDone: !events.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/events/:id', (req, res) => {
    Event.findOne({ where: { id: parseInt(req.params.id) } })
      .then(events => events.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
