const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./../database/index');

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/listings/:id/images', (req, res) => {
  const { id } = req.params;
  console.log(id);

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
