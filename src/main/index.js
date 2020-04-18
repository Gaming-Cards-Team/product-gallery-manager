import express from 'express'
import router from './endpoints/routers.js'
import swaggerUi from 'swagger-ui-express'
import yamljs from 'yamljs'
import cors from 'cors'

const swaggerDocument = yamljs.load('swagger.yml')

const app = express();

app.use(cors())
app.use((req, res, done) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    done();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

export default app