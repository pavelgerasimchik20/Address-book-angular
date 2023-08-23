import { Router } from 'express';

import addresses from './addresses.accessor';

const router = Router();

router.use('/addresses', addresses);

export default router;