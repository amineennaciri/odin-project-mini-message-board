const express = require("express");
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

router.get('/', (req, res) => {
    res.render('index.ejs', {messages});
})

router.get('/new', (req, res) => {
    res.render('form.ejs',);
})

router.post('/new', (req, res) => {
    console.log(req.body.myName);
    console.log(req.body.myMessage);
    messages.push({
        text: req.body.myMessage,
        user: req.body.myName,
        added: new Date(),
    });
    res.redirect('/');
})

module.exports = router;