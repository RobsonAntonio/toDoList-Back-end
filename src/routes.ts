import { Router, Request, Response } from "express";
import { CreateListTarefasController } from "./controllers/listTarefas/CreateListTarefasController";
import { ListTarefasController } from "./controllers/listTarefas/ListTarefasController";
import { RemoveTarefaController } from "./controllers/listTarefas/RemoveTarefaController";
import { isAuthenticated } from "./controllers/middlewares/isAuthenticated";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router();

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)


// -- ROTA LISTA TAREFAS --

router.post('/tarefas', isAuthenticated, new CreateListTarefasController().handle)

router.get('/listTarefas', isAuthenticated, new ListTarefasController().handle)

router.delete('/tarefas', isAuthenticated, new RemoveTarefaController().handle)


export {router};