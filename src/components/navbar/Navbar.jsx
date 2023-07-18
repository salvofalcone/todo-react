import React, { useContext } from "react";

import { TodosContext } from "@/state";

import styles from "./index.module.scss";

const Navbar = () => {
  const state = useContext(TodosContext);
  const numTodos = state.todoList.length;
  // console.log(numTodos);

  return <div className={styles.Navbar}>Sono presenti {numTodos} todo.</div>;
};

export default Navbar;
