import React, { useState, useCallback, useRef } from "react";
import TodoApp from "./components/TodoApp";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import "./reset.css";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "React", checked: true },
    { id: 2, text: "TodoList", checked: false },
    { id: 3, text: "node", checked: false },
    { id: 4, text: "github", checked: false },
  ]);

  // 고윳값으로 사용될 ID, ref를 사용하여 변수 담기
  const nextID = useRef(5);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextID.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextID.current += 1; // nextID 1씩 더하기
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <div>
      <TodoApp>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoApp>
    </div>
  );
};

export default App;
