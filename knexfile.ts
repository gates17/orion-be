// Update with your config settings.
import * as Knex from 'knex';

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'tico',
      port: 5432,
    },
    debug: true,
    pool: {
      min:2,
      max:50,
    },
    acquireConnectionTimeout: 10000,
    migrations: {
      directory:  './migrations',
      sortDirsSeparately: false,
    },
    seeds: {
      directory: './seeds/dev',
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
