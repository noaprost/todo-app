import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./Todo.module.css";

// todo 자체를 넘겨받았고, 그안에 id가 들어있기 때문에 id를 어떻게 넘기는지에 대해 고생할 필요가 없음
export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaRegTrashCan />
        </button>
      </span>
    </li>
  );
}
