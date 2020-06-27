// Import dependencies
import React from "react";
// Import interfaces
import { TodoInterface } from "./../interfaces";

// TodoItem component
const TodoItemAlt = (props: TodoInterface) => {
  return (
    <div className="todo-item">
      <div>
        <span className="todo-item-checked">✔</span>
      </div>

      <div className="todo-item-input-wrapper">
        <input value={props.text} />
      </div>
    </div>
  );
};

export default TodoItemAlt;
