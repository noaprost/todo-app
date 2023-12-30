import React, { useContext } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import styles from "./Header.module.css";
import { ToDoContext } from "../context/ToDoContext";

export default function Header() {
  const { setNowToDo, allToDo, activeToDo, completedToDo } =
    useContext(ToDoContext);

  const handleShowAll = () => {
    setNowToDo(allToDo);
  };

  const handleShowActive = () => {
    setNowToDo(activeToDo);
  };

  const handleShowCompleted = () => {
    setNowToDo(completedToDo);
  };
  return (
    <header className={styles.header}>
      <button className={styles.iconBtn}>
        <MdOutlineWbSunny />
      </button>
      <div className={styles.textBtn}>
        <button onClick={handleShowAll}>All</button>
        <button onClick={handleShowActive}>Active</button>
        <button onClick={handleShowCompleted}>Completed</button>
      </div>
    </header>
  );
}
