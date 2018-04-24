import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// import indexRouter from './routes/index';
// import usersRouter from './routes/v1/users';

// import mealsRouter from './routes/v1/meals';
// import menuRouter from './routes/v1/menu';
// import ordersRouter from './routes/v1/orders';

// import meals from './routes/meals';

const app = express();

// Start server
const port = 3456;
app.listen(port);
// console.log(`Listening on port : ${port}`);

app.set('views', path.join(__dirname, '../UI'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// change  template or public folder
app.use(express.static(path.join(__dirname, '../UI')));

// // Require static assets from template folder
app.use('../UI', express.static(path.join(`${__dirname}../UI`)));

// app.use('/users', usersRouter);
// app.use('/meals', mealsRouter);
// app.use('/menu', menuRouter);
// app.use('/orders', ordersRouter);

// app.route('/meals').get(meals.getMeals);
// app.route('/meals').post(meals.postMeal);
// app.route('/meals/:id').get(meals.getMeal);
// app.route('/meals/:id').delete(meals.deleteMeal);
// app.route('/meals/:id').put(meals.updateMeal);

// app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;