const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users');
const noticiasRouter = require('./routes/noticias');
const secretariaRouter = require('./routes/secretaria/secretaria');
const docentesRouter = require('./routes/secretaria/personal');
const seccionAlumnosRouter = require('./routes/seccionAlumnos/seccionAlumnos');
const rectoriaRouter = require('./routes/admin');
const asesoriaPedagogicaRouter = require('./routes/asesorPedagogico/asesorPedagogico');

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'https://escuelaevaperon.com',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/saludar', indexRouter);
app.use('/api/usuarios', usersRouter);
app.use('/api/noticias', noticiasRouter);
app.use('/api/secretaria', secretariaRouter);
app.use('/api/docentes', docentesRouter);
app.use('/api/seccionAlumnos', seccionAlumnosRouter);
app.use('/api/rectoria', rectoriaRouter);
app.use('/api/asesoriaPedagogica', asesoriaPedagogicaRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
});

module.exports = app;
