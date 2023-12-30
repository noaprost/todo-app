import { createContext, useState } from "react";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [nowToDo, setNowToDo] = useState(initialToDos);
  const [allToDo, setAllToDo] = useState(nowToDo);
  const [activeToDo, setActiveToDo] = useState(nowToDo);
  const [completedToDo, setCompletedToDo] = useState([]);

  return (
    <ToDoContext.Provider
      value={{
        nowToDo,
        setNowToDo,
        allToDo,
        setAllToDo,
        activeToDo,
        setActiveToDo,
        completedToDo,
        setCompletedToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

const initialToDos = ["공부하기", "운동가기", "투두 앱 만들기", "일찍 자기"];
