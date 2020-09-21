const descripcion = {
    demand: true,
    alias: 'd'
};
const descripcionlis = {
    demand: false,
    alias: 'd'
};
const completado = {
    demand: false,
    alias: 'c',
    default: true
};

const cm = { descripcion, completado }
const cmm = { descripcionlis, completado }

const argv = require('yargs')
    .command('listar', 'Imprime la lista de tareas', cmm)
    .command('crear', 'Crea una nueva tarea', cm)
    .command('actualizar', 'Permite actualizar estado de las tareas', cm)
    .command('borrar', 'Permite borrar actividades', cm)
    .help()
    .argv

module.exports = (
    argv
)