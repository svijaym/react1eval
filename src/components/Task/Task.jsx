import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = () => {
  let newTodo = "";
  console.log(newTodo);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className= {styles.task1}>
      <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text" >newTodo
      <Counter/>
      </div>
      <button data-cy="task-remove-button"></button>
    </li>
    </div>
  );
};

export default Task;
