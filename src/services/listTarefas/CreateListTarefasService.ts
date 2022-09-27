import prismaClient from "../../prisma";

interface TarefasRequest{
  name:string;
  tarefasId:string
}

class CreateListTarefasService{
  async execute({name,tarefasId}:TarefasRequest){

if(name === ''){
  throw new Error('Name inválido')

}

const tarefas = await prismaClient.listTarefas.create({
  data:{
    tarefasId: tarefasId,
    name: name,
  },
  
  
})
return tarefas;

  }
}

export {CreateListTarefasService}