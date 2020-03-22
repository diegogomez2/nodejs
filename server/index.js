const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/routes');
const propertiesReader = require('properties-reader');
const properties = propertiesReader('./app.properties');

app.use(morgan('dev'));
app.set('port', properties.get('server.port') || 4200);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use('/', routes);

app.listen(app.get('port'), () =>
    console.log(`Server on port ${app.get('port')}`)
);