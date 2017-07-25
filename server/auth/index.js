
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Person = require('../database/queries')

require('dotenv').config();

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

function validateUser(user) {
  console.log('validateUser is trying to happen');
  const validEmail = typeof user.email == 'string' &&
    user.email.trim() != '';
    console.log(validEmail);
  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
    console.log(validPassword);
  return validEmail && validPassword;
}


router.post('/signup', (req, res, next) => {
  console.log(req.body);
  if (validateUser(req.body)) {
    Person
      .getUserByEmail(req.body.email)
      .then(person => {
        if (!person) {
          console.log('test/if (!person) line 35/test');
          bcrypt.hash(req.body.password, 10)
            .then((hash) => {
              console.log(hash);
              const person = {
                name: req.body.name,
                email: req.body.email,
                password: hash
              }
              Person
                .createPerson(person)
                .then(res.json(person));
                })
        } else {
          console.log('test/ielseline 49/test');
          next(new Error('Invalid user'))
        }
      })
  }
})

router.post('/login', (req, res, next) => {
  console.log(req.body);
  if (validateUser(req.body)) {
    Person
      .getUserByEmail(req.body.email)
      .then(person => {
        console.log('person', person);
        if (person) {
          console.log('if');
          bcrypt.compare(req.body.password, person.password)
            .then((person) => {
              res.json(person)
            })
          } else {
            next( new Error('Invalid user'))
          }
        })
      }
  })


















module.exports = router;
