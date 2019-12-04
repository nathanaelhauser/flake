const { User } = require('../controllers')

module.exports = app => {

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/Home', (req, res) => {
    User.createGoogleUser(req.query['code'])
      .then(userData => res.render('Home', userData))
      .catch(e => console.log(e))
  })

  app.get('/About', (req, res) => {
    res.render('About')
  })

  app.get('/Excuses',(req, res) => {
    res.render('Excuses')
  })

  app.get('/Calendar',(req, res) => {
    res.render('Calendar')
  })
  app.get('/test',(req, res) => {
    res.render('test')
  })

}