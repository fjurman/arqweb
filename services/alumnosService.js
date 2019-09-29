
function AlumnosService() {

    console.log('Init user service');

    this._alumnos = [
        {id: 1, nombre: 'Diego', edad:20 },
        {id: 2, nombre: 'Agustin', edad: 22 },
        {id: 3, nombre: 'Alvaro', edad:24 }
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


