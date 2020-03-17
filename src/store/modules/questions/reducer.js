const INITIAL_STATE = {
  index:0,
  data:{
    questions:[
        {id:0,task:"Qual desses desenhos e o cavaleiros do zodiaco",perguntas:[{photo:"https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191004113546_1200_675_-_cavaleiros_do_zodiaco.jpg",pergunta:"pergunta 1:3"},{pergunta:"pergunta 1:2"},{pergunta:"pergunta 1:3"}]},
        {id:1,perguntas:[{pergunta:"pergunta 2:1"},{pergunta:"pergunta 2:2"},{pergunta:"pergunta 2:3"}]},
        {id:2,perguntas:[{pergunta:"pergunta 3:1"},{pergunta:"pergunta 3:2"},{pergunta:"pergunta 3:3"}]},
    ]
  },
}

export default function questions(state = INITIAL_STATE,action){
  switch(action.type){
    case "NEXT_QUESTION":
    return {...state,index:state.index+1};
    case "PREV_QUESTION":
        return {...state,index:state.index-1};
    default:
      return state
  }
}