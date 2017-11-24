var file = require('./file')

module.exports = app => {
  app.use('/file', file)
}