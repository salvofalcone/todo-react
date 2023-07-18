import React, { useContext } from "react";

import { TodosContext } from "@/state";

import styles from "./index.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(TodosContext);

  const completed = state.data.filter((todo) => todo.completed);
  const uncompleted = state.data.filter((todo) => !todo.completed);

  const numOfTodo = state.data.length;
  const numOfCompleted = completed.length;
  const numOfUncompleted = uncompleted.length;

  return (
    <div className={styles.Navbar}>
      <p>
        Sono presenti<strong> {numOfTodo}</strong> todo.{" "}
      </p>
      <p>
        <strong>{numOfCompleted}</strong> Completati
      </p>
      <p>
        <strong>{numOfUncompleted}</strong> Non completati
      </p>
    </div>
  );
};

export default Navbar;
