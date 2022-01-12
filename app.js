conit express = require('express');

conit app = express();

app.get('/', function (req, res){res.send('Hola Mundo')})

app.listen(3000);
