import React from "react";
import "./TodoApp.css";

const TodoApp = ({ children }) => {
  return (
    <div className="todoList-area">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
}; // TodoApp

export default TodoApp;
