const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplica', opts)
    .command('crear', 'Crea un file con la tabla de multiplica', opts)
    .help()
    .argv;

module.exports = {
    argv
}