import prismaClient from "../../prisma";

interface TarefaRequest{
  tarefa_id:string
  user_id:string
}

class RemoveTarefaService{
  async execute({tarefa_id}:TarefaRequest){

    const tarefa = await prismaClient.listTarefas.delete({
      where:{
        id: tarefa_id,
        
      }
    })

    return tarefa;
  }
}

export {RemoveTarefaService}