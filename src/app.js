const express = require('express');
const cors = require('cors');
const catRouter = require('./cat/cat-router')
const dogRouter = require('./dog/dog-router')
const userRouter = require('./users/users-router')


const app = express();
app.use(cors());


app.use('/api/dogs', dogRouter)
app.use('/api/cats', catRouter)
app.use('/api/users', userRouter)
// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app
