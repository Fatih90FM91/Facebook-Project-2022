const express =require('express');
require('./config/mongoose');

const app =express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//contuningg







app.listen(3000 , console.log('The server is listening now on port 3000!!'));