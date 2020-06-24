const express = require('express');
const router = express.Router();
const images = require('../../imagedata');
const auth = require('../../middleware/auth');

const ImageData = require('../../models/ImageData');

//@route POST api/imagedata
//@description Post Image data
//@access Private
//Loading all the images data in the database for the first time.Data is already inserted so it is commented.
// router.post('/', auth, async (req, res) => {
//   try {
//     ImageData.insertMany(images)
//       .then(function () {
//         console.log('Data inserted'); // Success
//       })
//       .catch(function (error) {
//         console.log(error); // Failure
//       });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send('Server error');
//   }
// });

//@route GET api/imagedata
//@description Get Images
//@access Private
router.get('/', auth, async (req, res) => {
  try {
    const imagesArray = await ImageData.find({
      favourite: { $ne: true },
    });
    res.json(imagesArray);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//@route GET api/imagedata/favourite
//@description Get Favourite Images
//@access Private
router.get('/favourite', auth, async (req, res) => {
  try {
    const imagesArray = await ImageData.find({ favourite: true });
    res.json(imagesArray);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//@route PATCH api/imagedata/favourite/:id
//@description Add Favourite Images
//@access Private
router.patch('/favourite/:id', auth, async (req, res) => {
  try {
    const image = await ImageData.findById(req.params.id);
    image.favourite = true;
    image.save();
    res.json(image);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//@route PATCH api/imagedata/favourite/remove/:id
//@description Remove Favourite Images
//@access Private
router.patch('/favourite/remove/:id', auth, async (req, res) => {
  try {
    const image = await ImageData.findById(req.params.id);
    image.favourite = false;
    image.save();
    res.json(image);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
