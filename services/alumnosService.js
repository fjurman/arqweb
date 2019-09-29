
function AlumnosService() {

    console.log('Init user service');

    this._alumnos = [
        {id: 1, nombre: 'Nombre 1', edad:20, fechaingreso: '01-03-2016',
        materias:[
            {id:1,nombre:"Arq. Web"},
            {id:31,nombre:"Analisis Matemático"}
            ],
        },
        {id: 2, nombre: 'Nombre 2', edad:22, fechaingreso: '01-03-2019',
        materias:[
            {id:12,nombre:"Fisica 1"},
            {id:11,nombre:"Algebra"}
            ],
        },
        {id: 3, nombre: 'Nombre 3', edad:23, fechaingreso: '01-08-2017',
        materias:[
            {id:172,nombre:"Historia"},
            {id:97,nombre:"Economia"}
            ],
        },
    ];
};

/**
 * @return {Promise<any>}
 */
AlumnosService.prototype.getAll = function() {
    return new Promise((resolve) => {
        resolve(this._alumnos);
    });
};

/**
 * @param id
 * @return {Promise<any>}
 */
AlumnosService.prototype.getById = function(id) {
    return new Promise((resolve, reject) => {
        let alumno = this._alumnos.find(a => a.id == id);
        if(alumno) {
            resolve(alumno);
        } else {
            reject(id);
        }
    });
};

/**
 * @param alumno
 */
AlumnosService.prototype.add = function(alumno) {
    this._alumnos.push(alumno);
};

/**
 * @param id
 */
AlumnosService.prototype.deleteById = function(id) {
    this._alumnos = this._alumnos.filter(a => a.id != id);
};

module.exports = new AlumnosService();


