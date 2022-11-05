const controller = {
    index: (req,res)=>{
        res.render('index');
    },
    about: (req,res)=>{
        res.render('./about')
    },
}
module.exports = controller;