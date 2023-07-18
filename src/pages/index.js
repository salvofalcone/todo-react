import { useReducer } from "react";

import Head from "next/head";

import { TodosContext } from "@/state";
import { todosReducer } from "@/state/reducers";
import Todo from "@/components/todo";
import Navbar from "@/components/navbar";
import { todoList } from "@/mocks/todoList";

import styles from "@/styles/Home.module.css";

export default function Home() {
  // console.log(TodosContext);

  const [state, dispatch] = useReducer(todosReducer, { data: todoList });
  // console.log(state.data);

  return (
    <>
      <Head>
        <title> Todo List </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodosContext.Provider value={{ state, dispatch }}>
        <main className={styles.Main}>
          <Navbar />
          <div className={styles.TodoContainer}>
            {state.data.map((todo) => (
              <Todo data={todo} key={todo.id} />
            ))}
          </div>
        </main>
      </TodosContext.Provider>
    </>
  );
}
