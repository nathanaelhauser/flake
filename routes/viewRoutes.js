module.exports = app => {

  app.get('/', (req, res) => {
    res.render('test')
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

}