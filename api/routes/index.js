import Express from 'express';
import taxonomy from './taxonomy';
import plp from './plp';

let router = Express.Router();

router
.use('/taxonomy', taxonomy)
.use('/plp', plp);

export default router;