const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1/images', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const imageSchema = new mongoose.Schema({
  listingId: String,
  images: Array,
});

const Images = mongoose.model('Images', imageSchema);

module.exports.Images = Images;
module.exports.mongoose = mongoose;
