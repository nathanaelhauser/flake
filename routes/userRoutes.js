const { User } = require('../models')

module.exports = app => {

  // GET all users (read)
  app.get('/users', (req, res) => {
    User.findAll()
      .then(users => res.json(users))
      .catch(e => console.error(e))
  })

  // GET one user (read)
  app.get('/users/:id', (req, res) => {
    User.findOne({ where: { id: parseInt(req.params.id) } })
      .then(user => res.json(user))
      .catch(e => console.error(e))
  })

  // POST one user (create)
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // PUT one user (update)
  app.put('/users/:id', (req, res) => {
    User.findOne({ where: { id: parseInt(req.params.id) } })
      .then(user => user.update({ isDone: !user.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE one user (delete)
  app.delete('/users/:id', (req, res) => {
    User.findOne({ where: { id: parseInt(req.params.id) } })
      .then(user => user.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
