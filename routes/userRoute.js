var express = require('express');
var router = express.Router();
const {addUser,getAllUsers,assignDistanceTrackRecord} = require("../controllers/userController")

/* GET users listing. */
router.get('/', getAllUsers);
router.post('/', addUser);
router.post('/:id',assignDistanceTrackRecord );
// router.get('/:id', findOne);

// router.delete('/', function(req, res) {
//   res.send('respond with a resource');
// });


module.exports = router;
