const mongoose = require('mongoose');

var afterMatchVideo = mongoose.model('afterMatchVideo', {
    chave: {
        type: String,
        require: true
    }
});

module.exports = { afterMatchVideo }