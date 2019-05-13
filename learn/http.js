const https = require('https');
const q = require('querystring')

const postData = q.stringify( {
    region: 14,
    province: 'FC'
})

const options = {
    hostname: 'carburanti.mise.gov.it',
    port: 443,
    path: '/OssPrezziSearch/ricerca/localita',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};


const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.write(postData)

req.on('error', (e) => {
    console.error(e);
});

req.end();