const controller = {
    home: (req,res)=>{
        res.render('index');
    },
    about: (req,res)=>{
        res.render('./about')
    },
}
module.exports = controller;