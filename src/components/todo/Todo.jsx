import React, { useContext } from "react";

import { TodosContext } from "@/state";

import styles from "./index.module.scss";

const Todo = ({ data }) => {
  const state = useContext(TodosContext);

  return (
    <div className={styles.Todo} onClick={() => console.log(data.todo)}>
      {data.todo}
    </div>
  );
};

export default Todo;
