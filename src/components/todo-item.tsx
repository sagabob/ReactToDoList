// Import dependencies
import React from "react";
// Import interfaces
import { TodoItemInterface } from "./../interfaces";
import ProgressItem from "./progress-item";

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div onClick={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>

      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>
      <ProgressItem
        progress={props.todo.progress}
        invokeProgress={props.invokeProgress}
      />
    </div>
  );
};

export default TodoItem;
