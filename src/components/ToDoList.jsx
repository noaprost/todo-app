import React, { useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [checkItems, setCheckItems] = useState(new Set());
  const [allToDo, setAllToDo] = useState(initialToDos);
  const [doneToDo, setDoneToDo] = useState([]);
  const [activeToDo, setActiveToDo] = useState([]);

  const handleCheckedItem = (id, isChecked) => {
    if (isChecked) {
      checkItems.add(id);
      setCheckItems(checkItems);
    } else {
      checkItems.delete(id);
      setCheckItems(checkItems);
    }
  };
  return (
    <div className={styles.toDos}>
      {allToDo.map((text, index) => (
        <CheckBox
          key={index}
          id={`id` + index}
          text={text}
          handleCheckedItem={handleCheckedItem}
        />
      ))}
    </div>
  );
}

const initialToDos = ["공부하기", "운동가기", "투두 앱 만들기", "일찍 자기"];
