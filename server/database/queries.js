const knex = require('./knex')
module.exports = {

  getAllDogs(){
    return knex('dogs')
  },
  addDog(dog){
    let newDog = {
      name: dog.name,
      weight:dog.weight,
      breed:  dog.breed,
      color: dog.color,
      owner_id: dog.owner_id
    }
  },
  getAllPersons(){
    return knex('person')
  },
  addPerson(person){
    let newPerson = {
      name: person.name,
      weight:person.weight,
      breed:  person.breed,
      color: person.color,
      owner_id: person.owner_id
    }
  },
  getUserByEmail(email) {
    return knex('person').where('email', email).first();
  },
  createPerson(person) {
    return knex('person').insert(person).returning('*');
  }
}
