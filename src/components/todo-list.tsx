// Import dependencies
import React from "react";

// Import TodoItem
import TodoItem from "./todo-item";

// Import interfaces
import { TodoListInterface } from "./../interfaces";

// TodoList component
const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(
          (todo) =>
            !todo.isCompleted && (
              <li key={todo.id}>
                <TodoItem
                  todo={todo}
                  handleTodoUpdate={props.handleTodoUpdate}
                  handleTodoRemove={props.handleTodoRemove}
                  handleTodoComplete={props.handleTodoComplete}
                  handleTodoBlur={props.handleTodoBlur}
                  invokeProgress={props.invokeProgress}
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
