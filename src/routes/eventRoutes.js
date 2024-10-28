import express from 'express';
import {
  createEvent,
  // add restOfFunctions here, // demo only
} from '../controllers/eventController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createEvent);
router.get(
  '/:id'
  // add restOfFunctions here, // demo only
);
router.get(
  '/'
  // add restOfFunctions here, // demo only
);

export default router;
