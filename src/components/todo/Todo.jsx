import React, { useContext } from "react";

import { TodosContext } from "@/state";

import styles from "./index.module.scss";

const Todo = ({ data, index }) => {
  const { state, dispatch } = useContext(TodosContext);

  const onHandleTodo = (todoId) => {
    dispatch({ type: "CHANGE_STATUS", payload: todoId });
  };

  const onRemoveTodo = (e) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: e,
    });
  };

  return (
    <div
      className={`${styles.Todo} ${data.completed ? styles.completed : ""}`}
      onClick={() => onHandleTodo(data.id)}>
      <p className={styles.Todo__Id}>{index + 1} </p>
      <p className={styles.Todo__Content}>{data.todo}</p>
      <button
        className={styles.Todo__Remove}
        onClick={() => onRemoveTodo(data.id)}>
        🗑️
      </button>
    </div>
  );
};

export default Todo;
