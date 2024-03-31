import { ADDTASK, DELETETASK, EDITTASK } from "./actionType"

export const add_task = (data)=>{
return {
    type:ADDTASK,
    payload:data
}
}
export const delete_task = (id)=>{
    return {
        type:DELETETASK,
        payload:id
    }
}
export const edite_task = (id,data)=>{
    return {
        type:EDITTASK,
        payload:{data,id}
    }
}