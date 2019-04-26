'use strict'

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'northwind'
  }
});
knex.on('query-error', function (err) {
  console.log(err)
})

module.exports = function build (db) {
  return {
    list: list,
    create: create
  }

  async function list (query) {
    let orderList = knex
      .table('orders')
    if (query['ship_country']) {
      orderList = orderList.where('ship_country', query['ship_country'])
    }
    return orderList
  }

  async function create (order) {
    let order_id = knex
        .table('orders')
        .insert(order)
        .returning('order_id')


    return order_id
  }
}
