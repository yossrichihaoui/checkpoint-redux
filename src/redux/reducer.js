import { ADDTASK, DELETETASK, EDITTASK } from "./actionType"

const initialState = {
    todo:[
        {id:1,task:"learn redux",time:"05/03/2024",iscomplete:true}
    ]
}

export const todoreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTASK:
    return { ...state,todo:[...state.todo,payload] }
  case DELETETASK:
    return {...state,todo:state.todo.filter(e=>e.id!==payload)}
    case EDITTASK:
return {...state,todo:state.todo.map(e=>e.id===payload.id? e=payload.data : e)}

  default:
    return state
  }
}
