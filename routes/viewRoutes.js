module.exports = app => {

  app.get('/', (req, res) => {
    res.render('home')
  })

  app.get('/about', (req, res) => {
    res.render('about')
  })

}