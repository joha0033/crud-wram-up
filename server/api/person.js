const express = require('express');
const router = express.Router();
const queries = require('../database/queries');

/* GET person page. */
router.get('/', function(req, res, next) {
  queries.getAllPersons().then(person => {
    res.json(person)
  })
});

router.post('/new',(req, res, next)=> {
  queries.addPerson(req.body).then(person => {
    res.json(person)
  })
})

module.exports = router;
