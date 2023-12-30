import { createContext, useContext, useEffect, useState } from "react";

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const handleTodos = (newTodos) => {
    setTodos(newTodos);
  };

  useEffect(() => {}, []);
  return (
    <ToDoContext.Provider value={{ todos, handleTodos }}>
      {children}
    </ToDoContext.Provider>
  );
}

export const useTodos = () => useContext(ToDoContext);
