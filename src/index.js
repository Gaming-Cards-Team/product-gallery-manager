import express from 'express'
import router from './routers.js'
import swaggerUi from 'swagger-ui-express'
import yamljs from 'yamljs'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

//const swaggerDocument = yamljs.load('swagger.yml')

const app = express();

app.use(cors())

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

export default app