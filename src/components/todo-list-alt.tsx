// Import dependencies
import React from "react";

// Import interfaces

import TodoItemAlt from "./todo-item-alt";
import { TodoInterface } from "../interfaces";

// TodoList component
const TodoListAlt = (props: TodoInterface[]) => {
  return (
    <div className="todo-list">
      <ul>
        {props.map(
          (todo) =>
            todo.isCompleted && (
              <li key={todo.id}>
                <TodoItemAlt {...todo} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TodoListAlt;
