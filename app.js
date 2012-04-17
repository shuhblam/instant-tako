var tako = require('tako')
  , request = require('request')
  , path = require('path')
  , app = tako()
  ;

app.route('/').files(path.join(__dirname, 'static/index.html'))
app.route('/*').files(path.join(__dirname, 'static/'))

// Ported example from socket.io docs to show integration
app.sockets.on('connection', function (socket) {
  app.sockets.emit('news', { will: 'be received by everyone'});
  socket.on('disconnect', function () {
    app.sockets.emit('user disconnected')
  })
})

app.httpServer.listen(80)
app.httpsServer.listen(443)