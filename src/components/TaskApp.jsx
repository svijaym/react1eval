import React from "react";
import { useState } from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [todos,setTodos] = useState([]);

  const addList = (newTodo) => {
    setTodos([...todos,newTodo]);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask addList={addList} />
      <Tasks/>
    </div>
  );
};

export default TaskApp;
