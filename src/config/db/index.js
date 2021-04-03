const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/shop_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('success');
    } catch (error) {
        console.log('fail');
    }
}
module.exports = { connect };
