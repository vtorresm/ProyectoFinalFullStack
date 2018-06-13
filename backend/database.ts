const mongoose = require('mongoose');
const URI = 'mongodb://localhost/crud-ferreteria';
//const URI = 'mongodb://userDB:userDB123@ds245210.mlab.com:45210/ferreteria';

mongoose.connect(URI)
    .then(db => console.log('db esta conectado'))
    .catch(err => console.error(err));

module.exports = mongoose;