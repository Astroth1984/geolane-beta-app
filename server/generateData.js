
var faker = require('faker');

var database = { products: [], costumers: [], categories: []};

for (var i = 1; i<= 19; i++) {
  database.products.push({
    id: i,
    prod_name: faker.commerce.productAdjective(),
    prod_desc: faker.lorem.sentences(),
    prod_price: faker.commerce.price(10,100),
    prod_priceHT : faker.commerce.price(10,100),
    sieze : faker.random.number(30),
    updated_at: faker.date.past(i, new Date())
  });
}

for (var i = 1; i<= 10; i++) {
  database.costumers.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    mail: faker.internet.email(),
    profil : faker.random.number(20),
    function : faker.company.catchPhraseDescriptor()
  });
}

for (var i=1; i<= 12; i++) {
  database.categories.push({
    id: faker.random.number(440),
    updated_at: faker.date.past(i, new Date()),
    login : faker.name.findName('admin'),
    code: faker.random.number(555),
    title: faker.company.companyName()
  })
}

console.log(JSON.stringify(database));
//console.log(JSON.stringify(customersDataBase));