import prismaClient from "../../prisma";


interface listRequest{
  tarefasId:string;
}

class ListTarefasService{
  async execute({tarefasId}:listRequest){
    const listTarefas = await prismaClient.listTarefas.findMany({
      where:{
        tarefasId:tarefasId
      },
      select:{
        id:true,
        name: true,
        tarefasId:true
      }
    })
    return listTarefas
  }
}

export {ListTarefasService}