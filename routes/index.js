module.exports = app => {
  require('./excuseRoutes.js')(app)
  require('./eventRoutes.js')(app)
  require('./userRoutes.js')(app)
}
    // require statements (app)
  
  
