var pen = require('../models/pen'); 
 
// List of all Costumes 
exports.pen_list = async function(req, res) { 
        try{ 
            let pen = await pen.find(); 
            res.send(pen); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
}; 
 // VIEWS 
// Handle a show all view 
exports.pen_view_all_Page = async function(req, res) { 
    try{ 
        let pens = await pen.find(); 
        res.render('pen', { title: 'pen Search Results', results: pens }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific pen. 
exports.pen_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: pen detail: ' + req.params.id); 
}; 
 
// Handle pen delete form on DELETE. 
exports.pen_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: pen delete DELETE ' + req.params.id); 
}; 
 
// Handle pen update form on PUT. 
exports.pen_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: pen update PUT' + req.params.id); 
}; 
// Handle Costume create on POST. 
exports.pen_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new pen(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"pen_type":"pooch", "price":12, "colour":"white"} 
    document.type = req.body.type; 
    document.ink_color = req.body.ink_color; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 