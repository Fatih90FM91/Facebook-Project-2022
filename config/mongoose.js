const mongoose = require('mongoose');

const db = 'mongodb://localhost/Facebook-Project-2022';

mongoose.connect(db)
    .then(() => console.log('Connected to DB ...'))
    .catch(err => console.log(err))
