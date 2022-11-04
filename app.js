const mainRoutes = require('./src/routes/mainRoute');
const productosRoutes = require('./src/routes/productosRoute');
const usuarioRoutes = require('./src/routes/usuariosRoute');

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use('/', mainRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/producto', productosRoutes);

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./src/views'));

app.listen(process.env.PORT || 3000, function() {
    console.log("corriendo server 3000")
});