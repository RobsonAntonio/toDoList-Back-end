import { Response, Request } from "express";
import { CreateListTarefasService } from "../../services/listTarefas/CreateListTarefasService";


class  CreateListTarefasController{
  async handle(req: Request, res:Response){
const {name,tarefasId} = req.body

    const createListTarefasService = new CreateListTarefasService();

    const listTarefas = await createListTarefasService.execute({
name,
tarefasId
    });

    return res.json(listTarefas);

  }
}

export {CreateListTarefasController}