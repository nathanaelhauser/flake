const { Excuse } = require('../models')

module.exports = app => {

  app.get('/excuses', (req, res) => {
    Excuse.findAll()
      .then(excuses => res.json(excuses))
      .catch(e => console.error(e))
  })

  app.post('/excuses', (req, res) => {
    Excuse.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/excuses/:id', (req, res) => {
    Excuse.findOne({ where: { id: parseInt(req.params.id) } })
      .then(excuse => excuse.update({ isDone: !excuse.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/excuses/:id', (req, res) => {
    Excuse.findOne({ where: { id: parseInt(req.params.id) } })
      .then(excuse => excuse.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
