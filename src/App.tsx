import { useState, FC } from "react";

import TodoList from "./Components/TodoList";

import ToDoPage from "./Components/ToDoPage";
const App: FC = () => {
  const [count, setCount] = useState(0);
  const myTodo = [
    {
      id: 1,
      title: "bring milk",
      done: true,
    },
    {
      id: 2,
      title: "bring milk2",
      done: true,
    },
    {
      id: 3,
      title: "bring milk3",
      done: true,
    },
  ];

  return (
    <div className="bg-blue-200 h-screen">
      <TodoList todos={myTodo}></TodoList>
    </div>
  );
};

export default App;
