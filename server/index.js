const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

// Express is the node server
app = express();
app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

// app is listening to port 3005
const port = 3004;
app.listen(port, () => console.log('Listening on port: ' + port) );

