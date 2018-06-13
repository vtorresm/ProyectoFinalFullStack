const mongoose = require('mongoose');
const URI = 'mongodb://localhost/crud-ferreteria';

mongoose.connect(URI)
    .then(db => console.log('db esta conectado'))
    .catch(err => console.error(err));

module.exports = mongoose;