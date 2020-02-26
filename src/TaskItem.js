import React, { useEffect } from "react";
import "./App.css";
import { Checkbox, TextField, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

export default function TaskItem(props) {
  const input = React.createRef();

  useEffect($ => {
    // input.current.focus();
  });

  return (
    <div className="TaskItem">
      <Checkbox
        onChange={evt => props.setDone(evt.target.checked)}
        checked={props.done}
      />
      <TextField
        id="standard-basic"
        onChange={evt => props.setName(evt.target.value)}
        value={props.name}
        placeholder="task"
        ref={input}
      />
      <IconButton onClick={props.remove} aria-label="delete">
        <Clear/>
      </IconButton>
    </div>
  );
}
