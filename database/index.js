const mongoose = require('mongoose');
const db = mongoose.connection;


// mongoose.connect('mongodb://127.0.0.1/images', { useNewUrlParser: true });
mongoose.connect('mongodb://172.17.0.2/images', { useNewUrlParser: true });

const imageSchema = new mongoose.Schema({
  listingId: String,
  images: Array,
});

const Images = mongoose.model('Images', imageSchema);

module.exports.Images = Images;
module.exports.mongoose = mongoose;
