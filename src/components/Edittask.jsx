import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { add_task, edite_task } from "../redux/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Edittask({ tasks }) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState(tasks.task);
  console.log(task);
  const [time, setTime] = React.useState(tasks.time);
  console.log(time);
  const [iscomplete, setIscomplete] = React.useState(tasks.iscomplete);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(
        edite_task(tasks.id,{
        id: tasks.id,
        task: task,
        time: time,
        iscomplete: iscomplete,
      })
    );
    handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Task
          </Typography>
          <TextField
            type="text"
            defaultValue={tasks.task}
            onChange={(e) => setTask(e.target.value)}
          />
          <TextField
            type="date"
            defaultValue={tasks.time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input type="checkbox" onClick={()=>setIscomplete(!iscomplete)}/>
          <Button onClick={edit}>Edit</Button>
        </Box>
      </Modal>
    </div>
  );
}
