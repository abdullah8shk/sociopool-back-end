var express = require('express');
var router = express.Router();
const {addDistanceTrackRecord,getAllDistanceTrackRecord} = require("../controllers/distanceController")

/* GET users listing. */
router.get('/', getAllDistanceTrackRecord);
router.post('/', addDistanceTrackRecord);
// router.post('/:id',assignSurvey );
// router.get('/:id', findOne);

// router.delete('/', function(req, res) {
//   res.send('respond with a resource');
// });


module.exports = router;
