var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const dotenv = require('dotenv');
const {verifyAdmin} = require('./midlewares/auth');
const {verify} = require('./midlewares/auth');
dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/admin/productos');
var loginRouter= require('./routes/login');
var usuariosRouter = require('./routes/admin/usuarios');
var carritoRouter = require('./routes/carrito');
var registroRouter = require('./routes/registro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session ({
    secret: 'pass secreto',
    cookie: {maxAge: null},
    resave: true,
    saveUninitialized: false,

}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/productos',verify, productosRouter);
app.use('/login',loginRouter);
app.use('/admin/usuarios',verifyAdmin,usuariosRouter);
app.use('/carrito',verify,carritoRouter);
app.use('/registro',registroRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
