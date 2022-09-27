import { Request, Response } from "express";
import { RemoveTarefaService } from "../../services/listTarefas/RemoveTarefaService";



class RemoveTarefaController{
  async handle(req:Request,res: Response){
    const tarefa_id = req.query.tarefa_id as string;
    const user_id = req.user_id
    const removeTarefa = new RemoveTarefaService();

    const tarefa = await removeTarefa.execute({
      tarefa_id,
      user_id
    })
    return res.json(tarefa)
  }
}


export {RemoveTarefaController}