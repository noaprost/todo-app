import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./ToDoList.module.css";

export default function ToDoList({ filter }) {
  const [todos, setTodos] = useState([]);

  // 새로운 todo를 받아와서 todos에 업데이트 해주는 함수
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    console.log(updated);
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filtered.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

// function readTodosFromLocalStorage() {
//   const todo = localStorage.getItem("todos");
//   console.log(todo);
//   todo ? JSON.parse(todo) : [];
// }

const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
