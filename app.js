const argv = require('./config/yargs');
const colors = require('colors')
    //const argv = require('yargs').argv

const porhacer = require('./porhacer/porhacer');

let comando = argv._[0]

console.log(argv);
switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        alias = 'c'
        break

    case 'listar':
        let listado = porhacer.getlistado();
        console.log("========TAREAS=============".green);
        for (let tarea of listado) {
            console.log('Tarea: ', tarea.descripcion.blue);
            console.log('Estado: ', tarea.completado);
        }
        console.log("===========================".green);
        alias: 'l'
        break

    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        alias: 'a'
        break
    case 'borrar':
        let borrar = porhacer.borrar(argv.descripcion)
        console.log(borrar);
        alias: 'b'
        break

    default:
        console.log('Comando no disponible');
        break

}