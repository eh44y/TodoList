import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const ocChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault(); // submit은 브라우저를 새로고침 하기에 이를 방지하기 위한 함수
    },
    [onInsert, value]
  );
  return (
    <form className="todoInsert-area" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={ocChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}; // TodoInsert

export default TodoInsert;
