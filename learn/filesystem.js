const fs = require('fs')

//leggere il file settings.info, che contiene una riga composta
//da <DIRNAME>,<EXTENSION>. Creare una cartella <DIRNAME> se non esiste
// e copiare tutti i file con estensione <EXTENSION> dalla cartella
//corrente alla cartella <DIRNAME>
fs.readFile('settings.info', { encoding: 'utf8'}, (err, data) => {

    const names = data.split(',')
    const dirName = names[0]
    const extension = names[1]

    if (!fs.existsSync(dirName)) fs.mkdirSync(dirName)

    fs.readdir('.', (err, files) => {
        if (err) console.log(err)

        files
        .filter(f => f.endsWith(extension))
        .forEach(f => {
            fs.copyFile(f, dirName + '/' + f, (err) => {
                console.log(f, 'copied to', dirName)
            })
        })    
    })    
})








/*
apriamo il file settings.info che all'interno contiene:
- il nome della cartella da creare (se non esiste già)
- l'estensione dei file che vogliamo copiare dalla cartella locale a alla sottocartella
es. texts,txt
 */