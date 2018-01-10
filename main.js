
var express = require('express');
var app = express();

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
  app.use(express.static('public', options))
  

app.get('/', function (req, res) {
//   res.send('Hello World!');
    res.sendFile('index.html', {root: './public/'}, function(err){
        err = err ? err : 'no hay error'
        console.warn('enviado: ', err)
    })
    // res.send('index.html');
});

app.post('/guardar', function(req, res){
    console.log(req)

    

    res.send('ok')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
