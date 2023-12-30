import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./ToDoList.module.css";
import { useTodos } from "../../context/ToDoContext";

export default function ToDoList({ filter }) {
  const { todos, handleTodos } = useTodos();

  // 새로운 todo를 받아와서 todos에 업데이트 해주는 함수
  const handleAdd = (todo) => {
    handleTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    console.log(updated);
    handleTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deleted) => {
    handleTodos(todos.filter((todo) => todo.id !== deleted.id));
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

const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
