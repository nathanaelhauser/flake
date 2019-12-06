const { Google } = require('../controllers')
const { User } = require('../models')

module.exports = app => {

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/Home', (req, res) => {
    if (req.query['code']) {
      Google.loginGoogleUser(req.query['code'])
        .then(userData => res.render('Home', userData))
        .catch(e => console.log(e))
    } else {
      User.findOne({ where: { google_id: req.query['google_id'] } })
        .then(({ dataValues: userData }) => 
          res.render('Home', userData))
        .catch(e => console.log(e))
    }
  })

  app.get('/About', (req, res) => {
    if (req.query['google_id']) {
      User.findOne({ where: { google_id: req.query['google_id'] }})
        .then(({ dataValues: userData }) =>
          res.render('About', userData))
        .catch(e => console.log(e))
    } else {
      res.render('About')
    }
  })

  app.get('/Excuses',(req, res) => {
    if (req.query['google_id']) {
      User.findOne({ where: { google_id: req.query['google_id'] }})
        .then(({ dataValues: userData }) =>
          res.render('Excuses', userData))
        .catch(e => console.log(e))
    } else {
      res.render('Excuses')
    }
  })

  app.get('/Calendar',(req, res) => {
    if (req.query['google_id']) {
      User.findOne({ where: { google_id: req.query['google_id'] }})
        .then(({ dataValues: userData }) =>
          res.render('Calendar', userData))
        .catch(e => console.log(e))
    } else {
      res.render('Calendar')
    }
  })

}