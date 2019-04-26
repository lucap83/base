'use strict'



exports.register = async function (server, options, next) {
  const orders = require('./data')()

  server.route({
    method: 'GET',
    path: '/',

    handler: async (request) => {
      console.log(request.query)
      return orders.list(request.query)
    }
  })

  server.route({
    method: 'POST',
    path: '/',

    handler: async (request) => {
      console.log(request.payload)
      return orders.create(request.payload)
    }
  })

}

exports.attributes = {
  name: 'orders',
  prefixPath: '/orders'
}
