import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../config/swagger.json';
import { userControler } from '../controllers/userController';
import { peopleControler } from '../controllers/peopleController';

const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Alpha Minion API',
    customfavIcon: '../assets/favicon.png',
};

const router = Router();

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

router.post('/users/authenticate', userControler.authenticate);

router.get('/people', peopleControler.list);
router.post('/people', peopleControler.create);
router.put('/people', peopleControler.update);
router.delete('/people/:id', peopleControler.delete);

export { router }
