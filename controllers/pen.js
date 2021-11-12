const pen = require('../models/pen');
var Pen = require('../models/pen'); 
 
// List of all Costumes 
exports.pen_list = async function(req, res) { 
        try{ 
            let pen = await Pen.find(); 
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
        let pens = await Pen.find(); 
        res.render('pen', { title: 'pen Search Results', results: pen }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific pen
exports.pen_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await pen.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
 
// Handle pen delete form on DELETE. 
exports.pen_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: pen delete DELETE ' + req.params.id); 
}; 
 
// Handle pen update form on PUT. 
exports.pen_update_put =  async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await pen.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.type)  
               toUpdate.type = req.body.type; 
        if(req.body.ink_color) toUpdate.ink_color = req.body.ink_color; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.pen_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Pen(); 
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

