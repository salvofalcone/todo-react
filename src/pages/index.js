import Head from "next/head";

import { TodosContext } from "@/state";
import Todo from "@/components/todo";
import Navbar from "@/components/navbar";
import { todoList } from "@/mocks/todoList";

import styles from "@/styles/Home.module.css";

export default function Home() {
  // console.log(TodosContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodosContext.Provider value={{ todoList }}>
        <main className={styles.Main}>
          <Navbar />
          {todoList.map((todo) => (
            <Todo data={todo} />
          ))}
        </main>
      </TodosContext.Provider>
    </>
  );
}
