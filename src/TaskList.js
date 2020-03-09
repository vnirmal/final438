import React, { useState, useEffect, useRef } from "react";
import TaskItem from "./TaskItem";
import "./App.css";
import { Button } from "@material-ui/core";

export default function TaskList(props) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const focusedRef = useRef();
  const [focus, setFocus] = useState(-1);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  useEffect(() => {
    if (focus !== -1) {
      focusedRef.current.querySelector("input[type=text]").focus();
    }
  }, [focus, focusedRef]);


  const setName = i => name => {
    const newTasks = [...tasks];
    newTasks[i].label = name;
    setTasks(newTasks);
  };

  const setDone = i => done => {
    const newTasks = [...tasks];
    newTasks[i].done = done;
    setTasks(newTasks);
  };

  const newTask = () => {
    const newTasks = [...tasks];
    newTasks.push({
      label: "",
      done: false
    });
    setTasks(newTasks);
    setFocus(newTasks.length - 1);
  };

  const removeTask = i => () => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
    setFocus(i - 1);
  };

  return (
    <div className="task-list">
      {tasks.map((item, i) => (
        <TaskItem
          key={i}
          name={item.label}
          done={item.done}
          setName={setName(i)}
          setDone={setDone(i)}
          remove={removeTask(i)}
          createNew={newTask}
          ref={i === focus ? focusedRef : null}
        />
      ))}
      <Button onClick={newTask}>Add</Button>
      <p> You have {tasks.filter(task=> !task.done).length} items to go! </p>
    </div>
  );
}

