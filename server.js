const hapi = require('hapi')
const knex = require('knex')

const plugins = [
    require('./lib/orders')
]

const server = hapi.server({
    port: 8001,
    host: '0.0.0.0',
    routes: {
        cors: true
    }
})

let init = async() => {
    for (let i = 0; i < plugins.length; i++) {
        const plugin = plugins[i]
        await server.register(
            {
                register: plugin.register,
                name: plugin.attributes.name
            }, {
                routes: {
                    prefix: '/base' + plugin.attributes.prefixPath
                }
            }, (err) => { if (err) console.error(err, server) })
    }

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()






