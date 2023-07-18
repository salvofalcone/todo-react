import React, { useContext } from "react";

import { TodosContext } from "@/state";

import styles from "./index.module.scss";

const Todo = ({ data }) => {
  const { state, dispatch } = useContext(TodosContext);
  // console.log(state);

  const onHandleTodo = (todoId) => {
    // console.log(data);
    dispatch({ type: "CHANGE_STATUS", payload: todoId });
  };

  return (
    <div
      className={`${styles.Todo} ${data.completed ? styles.completed : ""}`}
      onClick={() => onHandleTodo(data.id)}>
      {data.todo}
    </div>
  );
};

export default Todo;
