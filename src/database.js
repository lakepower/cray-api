const mysqlx = require('@mysql/xdevapi');

const database = {};

database.getSession = (options) => {
  return mysqlx.getSession(Object.assign({}, {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 33060, // Use XDEVAPI PORT
    password: process.env.MYSQL_PASSWORD || '',
    user: process.env.MYSQL_USER || ''
  }, options));
};

module.exports = database;
