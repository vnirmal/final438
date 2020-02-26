import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import "./App.css";
import { Button } from "@material-ui/core";

export default function TaskList(props) {
  const [state, setState] = useState({
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  });


  const setName = i => name => {
    const tasks = [...state.tasks];
    tasks[i].label = name;
    setState({
      tasks: tasks
    });
  };

  const setDone = i => done => {
    const tasks = [...state.tasks];
    tasks[i].done = done;
    setState({ tasks });
  };

  const newTask = () => {
    const tasks = [...state.tasks];
    tasks.push({
      label: "",
      done: false
    });
    setState({ tasks });
  };

  const removeTask = i => () => {
    const tasks = [...state.tasks];
    tasks.splice(i, 1);
    setState({ tasks });
  };

  return (
    <div className="task-list">
      {state.tasks.map((item, i) => (
        <TaskItem
          key={i}
          name={item.label}
          done={item.done}
          setName={setName(i)}
          setDone={setDone(i)}
          remove={removeTask(i)}
        />
      ))}
      <Button onClick={newTask}>Add</Button>
    </div>
  );
}

// [{"name", true}, {"name", false}]
// [<TaskItem .../>, <TaskItem .../>]
