require('dotenv').config({path: './../../.env'});
module.exports = {
  "development": {
    "username": 'root',
    "password": null,
    "database": 'eva-peron-db',
    "host": 'localhost',
    "dialect": "mysql"
  },
  "test": {
    "username": 'root',
    "password": null,
    "database": 'eva-peron-db',
    "host": 'localhost',
    "dialect": "mysql"
  },
  "production": {
    "username": 'root',
    "password": null,
    "database": 'eva-peron-db',
    "host": 'localhost',
    "dialect": "mysql"
  }
}
