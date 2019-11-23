module.exports = app => {
  // require statements (app)
  require('./viewRoutes.js')(app)
  require('./excuseRoutes.js')(app)
  require('./eventRoutes.js')(app)
  require('./userRoutes.js')(app)
}