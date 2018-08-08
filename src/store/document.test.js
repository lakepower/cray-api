const { test } = require('tap');
const dotenv = require('dotenv');
const documentStore = require('./document');

dotenv.load();

// test('Create Table', (t) => {
//   documentStore.createCollection()
//     .then(() => {
//       t.end();
//     });
// });
//
