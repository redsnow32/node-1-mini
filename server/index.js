const express = require('express');
const ctrl = require('./controllers/books_controller');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json());

app.get('/api/books', ctrl.read)
app.post('/api/books',ctrl.create)
app.delete('/api/books/:id', ctrl.delete)
app.put('/api/books/:id',ctrl.update)

let port=3000;
app.listen(port,()=>{
console.log(`Listening on port: ${port}` );
})