const fs = require('fs');
const colors = require('colors');

const createFile = async(base = 1, listar, limite) => {
    const result = new Promise((resolve, reject) => {
        try {
            if (listar) {
                console.log('================================'.green);
                console.log(`          Tabla del ${base} `.blue);
                console.log('================================'.green);
            }
            let salida = '';
            let consola = '';
            for (let index = 1; index <= limite; index++) {
                consola += `${base} ${'x'.green} ${index} ${'='.green} ${index * base}\n`;
                salida += `${base} x ${index} = ${index * base}\n`;
            }
            if (listar) console.log(consola);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
            salida = null;
        } catch (error) {
            reject(error);
        }
    });

    return result;
}

module.exports = {
    createFile
}