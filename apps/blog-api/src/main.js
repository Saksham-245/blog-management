/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

const db = require('./app/db/db')
const adminRoute = require('./app/routes/adminRoutes');
const userRoute = require('./app/routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

console.log(process.env);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to blog-api!' });
});

app.use('admin',adminRoute)
app.use('/api/user',userRoute)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log('Error: ' + err));
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
