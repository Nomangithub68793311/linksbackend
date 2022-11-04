const express = require('express');


const mongoose = require('mongoose')
var cors = require('cors')
const app = express();
const router = require('./routes/authroute');
app.use(cors())
app.use(express.json());


// const mongouri='mongodb+srv://userSimon:SimonntHJ3322@cluster0.ckww6.mongodb.net/userData?retryWrites=true&w=majority';
const mongouri = 'mongodb+srv://contact:My9J9xnpsYSRnH6@cluster0.ncmj4.mongodb.net/simonDatabase?retryWrites=true&w=majority'

// const mongouri = 'mongodb://20.235.98.213:27017'
mongoose.connect(mongouri, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then((result) => {
    console.log('mongo connected');
})
    .catch((err) => { console.log(err) });

app.get('/', (req, res) => {
    res.send('yes got it now');
})

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`server run at ${port}`) })
app.use(router)