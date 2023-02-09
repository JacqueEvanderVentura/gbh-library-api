import { Router } from "express";
const router: Router = Router();
import book from './components/book/router'


router.use('/book',book)

export default router;