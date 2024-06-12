const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");


// Falta multer, method_override y algun que otro mas.
// No te olvides de hacer los middleWares.

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const noticiasRouter = require('./routes/noticias');

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Configuracion de CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto a la URL de tu front-end
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Permitir el envío de cookies si es necesario
};

app.use(cors(corsOptions));

// Middleware para manejar solicitudes OPTIONS
app.options('*', cors(corsOptions));


app.use("/api/saludar", indexRouter);
app.use("/api/usuarios", usersRouter);
app.use("/api/noticias", noticiasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = app;
