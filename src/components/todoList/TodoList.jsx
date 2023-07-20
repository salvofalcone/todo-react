import React, { useContext, useReducer, useState } from "react";

import Todo from "@/components/todo";

import { TodosContext } from "@/state";

import { todosReducer } from "@/state/reducers";
import { todoList } from "@/mocks/todoList";

import styles from "./index.module.scss";

const TodoList = () => {
  const [input, setInput] = useState("");
  
  // const [state, dispatch] = useReducer(todosReducer, { data: data });

  const { state, dispatch } = useContext(TodosContext);

  const onHandleInput = (e) => setInput(e.target.value);

  const onSetNewTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_NEW_TODO",
      payload: input,
    });

    setInput("");
  };

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className={styles.TodoList}>
        <form onSubmit={onSetNewTodo} className={styles.TodoList__Form}>
          <input
            className={styles.TodoList__Form__Input}
            type="text"
            name="content"
            value={input}
            onChange={onHandleInput}
            placeholder="New task"
          />
          <input
            type="submit"
            value="+"
            className={styles.TodoList__Form__Button}
          />
        </form>

        {state.data.map((todo, i) => (
          <Todo data={todo} key={todo.id} index={i} />
        ))}
      </div>
    </TodosContext.Provider>
  );
};

export default TodoList;
