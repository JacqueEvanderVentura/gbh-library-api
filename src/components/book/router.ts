import { Router } from "express";
import controller from "./controller";
const routes: Router = Router();


routes.route('/')
		.get(controller.getAll)
		.post(controller.create)

routes.route("/:bookId/page/:page/:type").get(controller.getAllPages);

export default routes;