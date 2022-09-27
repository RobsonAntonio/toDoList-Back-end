import { Request,Response } from "express";
import { ListTarefasService } from "../../services/listTarefas/ListTarefasService";

class ListTarefasController{

  async handle(req:Request, res:Response){
const tarefasId = req.query.tarefasId as string

    const listTarefasService = new ListTarefasService();

    const tarefas = await listTarefasService.execute({tarefasId});

    return res.json(tarefas)
  }
}

export {ListTarefasController}