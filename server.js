const express    = require('express');
const bodyParser = require('body-parser');
const moment     = require('moment');
const alumnosService = require('./services/alumnosService');
const app = express();

// parse body as json
app.use(bodyParser.json());

// all requests
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);
    next();
});

// get home
app.get('/', async (req, res) => {
    let alumnos = await alumnosService.getAll();
    let list = [];
    alumnos.forEach((a) => {
        list.push(`<li>${a.nombre} con id: ${a.id}</li>`);
    });
    res.send(
        `<html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <ul>
                    ${list.join('')}
                </ul>            
            </body>
        </html>`
    );
});

// api
app.get('/v1/api/alumnos', async (req, res) => {
    let alumnos = await alumnosService.getAll();
    res.json(alumnos);
});

// get alumnos by id
app.get('/v1/api/alumnos/:id', async (req, res) => {
    try {
        let alumno = await alumnosService.getById(req.params.id);
        res.json(alumno);
    } catch(ex) {
        res.status(404).end();
    }
});

// add new client - Content Type: json
app.post('/v1/api/alumnos', (req, res) => {
    alumnosService.add(req.body);
    res.status(201).send(req.body);
});

app.delete('/v1/api/alumnos/:id', (req, res) => {
    alumnosService.deleteById(req.params.id);
    res.status(204).end();
});

// start server
app.listen(process.env.PORT || 3000, function () {
    console.log('API andando con express...');
});
