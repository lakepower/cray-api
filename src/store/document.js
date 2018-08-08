const database = require('../database');

const document = {};

document.createCollection = () => {
  return database.getSession()
    .then((session) => {
      return session.getSchema('cray')
        .createCollection('document')
        .then((collection) => {
          // Use the Collection instance.
        });
    });
};

module.exports = document;