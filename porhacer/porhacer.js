const fs = require('fs');

let tareas = [];
const guardardb = () => {
    let data = JSON.stringify(tareas);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo añadir', err)
    });
}

const cargardb = () => {
    try {
        tareas = require('../db/data.json')
            // console.log(tareas, "1");
    } catch (error) {
        tareas = []
            //console.log(tareas, "2");
    }

}


const crear = (descripcion) => {
    cargardb();
    let porhacer = {
        descripcion,
        completado: false
    };
    //console.log(porhacer, "tarea nueva");
    tareas.push(porhacer);

    guardardb();

    return porhacer;

}

const getlistado = () => {
    cargardb();
    return tareas;
}
const actualizar = (descripcion, completado = true) => {
    cargardb();
    let index = tareas.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });
    if (index >= 0) {
        tareas[index].completado = completado;
        guardardb()
        return true
    } else {
        return false
    }

}

const borrar = (descripcion) => {
    cargardb();
    let index = tareas.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })
    if (index >= 0) {
        let tareaborrada = tareas.filter(tarea => tarea.descripcion !== descripcion)
        tareas = tareaborrada;
        guardardb()
        return true
    } else {
        return false
    }
}
module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}