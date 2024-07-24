import { Router } from 'express';

const router = Router();

import { getStatus, getStats } from '../controllers/AppController';
import { getConnect, getDisconnect } from '../controllers/AuthController';
import { postNew, getMe } from '../controllers/UsersController';
import {
  postUpload,
  getShow,
  getIndex,
  putPublish,
  putUnpublish,
  getFile,
} from '../controllers/FilesController';

// Api end points
router.get('/status', getStatus);
router.get('/stats', getStats);

router.post('/users', postNew);
router.get('/connect', getConnect);
router.get('/disconnect', getDisconnect);
router.get('/users/me', getMe);

router.post('/files', postUpload);
router.get('/files/:id', getShow);
router.get('/files', getIndex);
router.put('/files/:id/publish', putPublish);
router.put('/files/:id/unpublish', putUnpublish);
router.get('/files/:id/data', getFile);
export default router;
