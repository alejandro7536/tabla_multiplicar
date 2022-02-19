const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Veces que se multiplica la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tienen que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;