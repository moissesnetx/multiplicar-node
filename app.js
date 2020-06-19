const argv = require('./config/yargs').argv

const colors = require('colors');

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar')

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: `, colors.blue(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];