const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(function(req, res, next) {
  // console.log(req.get('User-Agent'));
  if(req.get('Cookie') === "BadGuy") {
    res.status(400);
    res.send('Youre a bad guy, go away!');
  } else {
    next();
  }
})


app.get('/', function(req, res) {
  res.render('home');
});

app.get('/sayHi/:name', function(req, res) {
  res.render('sayHi', {
    name: req.params.name
  });
});

app.listen(9000, function() {
  console.log('server listening on http://localhost:9000');
})
