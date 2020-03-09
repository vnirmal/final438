import React from "react";
import "./App.css";
import { Checkbox, TextField, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

const TaskItem = React.forwardRef((props, ref) => {
  function checkKey(evt) {
    if (evt.key === "Enter") {
      props.createNew();
    } else if (evt.key === "Backspace" && !props.name){
      props.remove();
    }
  }

return (
    <div className="TaskItem">
      <Checkbox
        onChange={evt => props.setDone(evt.target.checked)}
        checked={props.done}
      />
      <TextField
        id="standard-basic"
        onChange={evt => props.setName(evt.target.value)}
        onKeyDown={checkKey}
        value={props.name}
        placeholder="task"
        ref={ref}
      />
      <IconButton onClick={props.remove} aria-label="delete">
        <Clear/>
      </IconButton>
    </div>
  )
})

export default TaskItem;
