'use strict';

exports.up = async function(knex, Promise) {
  await knex.schema.createTable('firends', function(table) {
    table.charset('utf8');
    table.collate('utf8_unicode_ci');

    table.increments('id').unsigned().primary();
    table.integer('user1Id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('user2Id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');

    // Timestamps.
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now()).index();
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now());

    table.unique(['user1Id', 'user2Id']);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('firends');
};
