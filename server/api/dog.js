const express = require('express');
const router = express.Router();
const queries = require('../database/queries');

/* GET dog page. */
router.get('/', function(req, res, next) {
  queries.getAllDogs().then(dogs => {
    res.json(dogs)
  })
});

router.post('/new',(req, res, next)=> {
  queries.addDog(req.body).then(dog => {
    res.json(dog)
  })
})

module.exports = router;
