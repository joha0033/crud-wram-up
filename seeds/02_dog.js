exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE dogs CASCADE; ALTER SEQUENCE dogs_id_seq restart with 5')
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          name: 'taylor',
          breed: 'black lab',
          color: 'black',
          weight: 85,
          owner_id: 1
        },{
          name: 'harley',
          breed: 'boston terrier',
          color: 'black/white',
          weight: 35,
          owner_id: 1
        },{
          name: 'hank',
          breed: 'basset hound',
          color: 'brown/white',
          weight: 55,
          owner_id: 1
        },{
          name: 'nash',
          breed: 'labradoodle',
          color: 'black',
          weight: 65,
          owner_id: 2
        },{
          name: 'winston',
          breed: 'collie',
          color: 'black',
          weight: 50,
          owner_id: 2
        },
      ]);
    });
};
