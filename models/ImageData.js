const mongoose = require('mongoose');

const ImageDataSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  url: {
    type: String,
  },
  download_url: {
    type: String,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
});

module.exports = ImageData = mongoose.model('imagedata', ImageDataSchema);
