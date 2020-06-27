/* eslint-disable react-hooks/exhaustive-deps */
// Import dependencies
import React from "react";
import { TodoListAltInterface } from "../interfaces";
import TodoItemAlt from "./todo-item-alt";

// Import interfaces

// TodoList component
const TodoListAlt = (props: TodoListAltInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todosAlt.map(
          (item) =>
            item.isCompleted && (
              <li key={item.id}>
                <TodoItemAlt {...item} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TodoListAlt;
