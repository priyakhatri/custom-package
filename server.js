const express = require('express');
const app = express();
const port = 8000;
const priya1 = require('priya-package-1');
const priya2 = require('priya-package-2');
const cluster = require('cluster');

app.locals.name = require(__dirname + '/package.json').name;

app.get('/', (req, res) => {
  res.send({ info: '1'});
});
app.use('/module1', priya1);

app.use('/module2', priya2);

// const apps = [app, priya];

// const notStarted = [app, priya];
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < apps.length; i++) {
//     cluster.fork({start: apps[i].locals.name});
//   }


//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   console.log(`Worker ${process.pid} started`);
//   const startAppName = process.env.start;
//   const toStart = apps.filter(m => m.locals.name === startAppName)[0];
  // toStart.listen(port, () => console.log(`${toStart.locals.name} listening on port ${port}!`));
// }

app.listen(port, () => console.log(`${app.locals.name} listening on port ${port}!`));
