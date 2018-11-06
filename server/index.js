const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var request = require('request');
const db = require('./../database/index');
const cors = require('cors');

const port = 3003;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/listings/:id/images', cors(), (req, res) => {
  const { id } = req.params;
  db.Images.find({ listingId: id })
    .then((listingImages) => {
      console.log(listingImages);
      res.json(listingImages);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
