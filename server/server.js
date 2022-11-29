import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
var cors = require('cors')

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Swagger API
const swaggerDocument = require('./swagger.json'); //swagger document
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* --------------- Production Route Lists -------------------------------------------------------*/
app.use(routes)
/* _____________________ END ____________________________*/

app.listen(port , () => console.log("Listening on port "+port));