var express = require('express');
const pen_controllers= require('../controllers/pen'); 
var router = express.Router();

/* GET home page. */
router.get('/', pen_controllers.pen_view_all_Page);

module.exports = router;