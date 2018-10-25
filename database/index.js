var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/images', {useNewUrlParser: true});
var db = mongoose.connection;

var imageSchema = new mongoose.Schema({
listingId: String,
images: Array
});

var Images = mongoose.model('Images', imageSchema);




module.exports.Images = Images;
module.exports.mongoose = mongoose;









