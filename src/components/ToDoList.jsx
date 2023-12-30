import React, { useContext, useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./ToDoList.module.css";
import { ToDoContext } from "../context/ToDoContext";

export default function ToDoList() {
  const [checkItems, setCheckItems] = useState([]);
  const {
    nowToDo,
    allToDo,
    activeToDo,
    setActiveToDo,
    completedToDo,
    setCompletedToDo,
  } = useContext(ToDoContext);

  const handleCheckedItem = (id, isChecked) => {
    if (isChecked) {
      setCheckItems([...checkItems, id]);
      console.log(`checkItems : ${checkItems}, id : ${id}`);
    } else {
      setCheckItems(checkItems.filter((item) => item !== id));
      console.log(`checkItems : ${checkItems}, id : ${id}`);
    }
  };

  return (
    <div className={styles.toDos}>
      {nowToDo.map((text, index) => (
        <CheckBox
          key={index}
          id={index}
          text={text}
          handleCheckedItem={handleCheckedItem}
        />
      ))}
    </div>
  );
}
