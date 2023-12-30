import { createContext, useContext, useEffect, useState } from "react";

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: "", text: "할 일을 추가해주세요", status: "active" },
  ]);
  const handleTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.todos = todos;
  };

  console.log(localStorage.todos);

  useEffect(() => {
    if (!("todos" in localStorage)) {
      setTodos(localStorage.todos);
    } else {
      localStorage.setItem("todos", todos);
    }
  }, []);
  return (
    <ToDoContext.Provider value={{ todos, handleTodos }}>
      {children}
    </ToDoContext.Provider>
  );
}

export const useTodos = () => useContext(ToDoContext);
