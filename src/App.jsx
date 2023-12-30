import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import { ToDoContext, ToDoProvider } from "./context/ToDoContext";
import { useContext } from "react";

export default function App() {
  return (
    <ToDoProvider>
      <Header />
      <ToDoList />
      <Footer />
    </ToDoProvider>
  );
}
