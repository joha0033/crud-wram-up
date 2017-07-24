
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person CASCADE; ALTER SEQUENCE person_id_seq restart with 3')
    .then(function () {
      // Inserts seed entries
      const salt = bcrypt.genSaltSync(saltRounds);

      return knex('person').insert([
        {
          id: 1,
          name: 'austin',
          email: 'joha0033@gmail.com',
          password:bcrypt.hashSync('hamburgers', salt)
        },
        {
          id: 2,
          name: 'mike',
          email: 'mike@gmail.com',
          password:bcrypt.hashSync('danceparty', salt)
        }
      ]);
    });
};
