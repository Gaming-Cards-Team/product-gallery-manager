import express from 'express'
import router from './endpoints/routers.js'
import swaggerUi from 'swagger-ui-express'
import yamljs from 'yamljs'
import cors from 'cors'

const swaggerDocument = yamljs.load('swagger.yml')

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors)
app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

export default app