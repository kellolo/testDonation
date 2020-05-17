let express = require('express');
let app = express();
app.use(express.json());
//db
let db = require('mongoose');
db.connect('mongodb://localhost/donation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


let donation = require('./controllers/donation.js');

app.post('/donate', donation.send);

app.listen(3000, () => { console.log('server is ON @ 3000') })