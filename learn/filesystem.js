const fs = require('fs')

// fs.readdir('.', (err, files) => {
//     if (err) console.log(err)
//
//     files.forEach(f => {
//         console.log(f)
//     })
// })
//
// let files = fs.readdirSync('.')
// files.forEach(f => {
//     console.log(f)
// })


fs.readFile('settings.info', { encoding: 'utf8'}, (err, data) => {
    const dirName = data.split(',')[0]
    const extensions = data.split(',')[1]

    console.log(dirName, extensions)
})

/*
apriamo il file settings.info che all'interno contiene:
- il nome della cartella da creare (se non esiste già)
- l'estensione dei file che vogliamo copiare dalla cartella locale a alla sottocartella
es. texts,txt
 */