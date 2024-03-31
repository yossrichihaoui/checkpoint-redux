import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delete_task } from '../redux/action'
import Edittask from './Edittask'

function Todolist() {
    const todo=useSelector(state=>state.todo)
    const dispatch=useDispatch()
    console.log(todo)
    const [iscomplete,setIscomplete]=useState(false);
  return (
    <div>
      <Button onClick={()=>setIscomplete(true)} style={{color:"black"}}>Iscomplete</Button>
      <Button onClick={()=>setIscomplete(false)} style={{color:"black"}}>Notcomplete</Button>
       {todo.filter(e =>e.iscomplete===iscomplete).map(e=>
        <Card style={{width:"18rem",backgroundColor:"green"}}>
            <Card.Body>
                <Card.Text>{e.task}</Card.Text>
                <Card.Text>{e.time}</Card.Text>
            <input type="checkbox" checked={e.iscomplete} />
            <Button variant='danger' onClick={()=>dispatch(delete_task(e.id))}>delete</Button>
            <Edittask tasks={e}/>
            </Card.Body>
        </Card>
        )} 
    </div>
  )
}

export default Todolist