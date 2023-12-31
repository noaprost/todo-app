import React, { useState } from "react";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

export default function App() {
  // Header와 ToDoList가 어떤 filter가 선택되었는지
  // 공통적으로 알아야하므로 App에서 상태를 관리해주는게 좋음
  const [filter, setFilter] = useState(filters[0]);

  // Header에게는 전체 filters, 현재 filter, filter가 변경될 때 호출해야하는 함수를 줘야함
  // ToDoList는 변경된 filter가 무엇인지 보여줘야함
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </DarkModeProvider>
  );
}
