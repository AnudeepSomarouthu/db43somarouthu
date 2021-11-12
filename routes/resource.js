var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pen_controller = require('../controllers/pen'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// pen ROUTES /// 
 
// POST request for creating a pen.  
router.post('/resource/pens', pen_controller.pen_create_post); 
 
// DELETE request to delete pen. 
router.delete('/resource/pen/:id', pen_controller.pen_delete); 
 
// PUT request to update pen. 
router.put('/resource/pens/:id', 
pen_controller.pen_update_put); 
 
// GET request for one pen. 
router.get('/resource/pens/:id', pen_controller.pen_detail); 
 
// GET request for list of all pen items. 
router.get('/resource/pen', pen_controller.pen_list); 
 
module.exports = router; 