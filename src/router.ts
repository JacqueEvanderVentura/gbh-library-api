import { Router } from "express";
const router: Router = Router();
import book from './components/book/router'


router.use('/',book)

export default router;