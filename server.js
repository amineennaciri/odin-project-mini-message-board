const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 8000;
const mainRoutes = require('./routes/index');
//
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//

app.use("/", mainRoutes);
app.use("/new", mainRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})