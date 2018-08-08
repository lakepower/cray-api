const database = require('../database');

const card = {};

card.get = () => {
  return database
    .getSession()
    .then((session) => {
      // Buffer the results from execute();
      // Then send the whole payload
      const resultRows = [];
      return session
        .getSchema('cray')
        .getTable('cards')
        .select()
        .execute((row) => {
          resultRows.push(row);
        })
        .then((results) => {
          // Format results to a List Object
          // Transform Table to JSON
          return resultRows;
        });
    });
};

card.createTable = () => {
  return database.getSession()
    .then((session) => {
      return session
        .sql(`
          CREATE TABLE cray.cards
          (
            id   int PRIMARY KEY NOT NULL AUTO_INCREMENT,
            name text
          )
          `)
        .execute();
    });
};

card.insert = (data) => {
  return database.getSession()
    .then((session) => {
      return session.getSchema('cray').getTable('cards');
    })
    .then((table) => {
      return table.insert(['name']).values([data.name])
        .execute();
    });
};

module.exports = card;
