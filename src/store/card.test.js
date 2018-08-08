const test = require('tap').test;
const dotenv = require('dotenv');
const cardStore = require('./card');

dotenv.load();

// test('Create Table', (t) => {
//   cardStore.createTable()
//     .then(() => {
//       t.end();
//     });
// });

test('Insert Card', (t) => {
  const card = {
    name: 'blue'
  };

  cardStore.insert(card)
    .then(() => {
      t.end();
      // exit after it's done
      process.exit(0);
    });
});
