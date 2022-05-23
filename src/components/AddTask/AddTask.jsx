import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = (addList) => {
  const [value, setValue] = useState("");
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." onChange={(el) => {setValue(el.target.value);}}/>
      <button data-cy="add-task-button" onClick={() => { console.log(value); addList(value); setValue("");}}>+</button>
    </div>
  );
};

export default AddTask;
