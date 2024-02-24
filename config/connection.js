const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI ||'',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection