// Import dependencies
import * as React from "react";
import "./styles/styles.css";
// Import components
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

// Import interfaces
import { TodoInterface } from "./interfaces";

// Import styles
import "./styles/styles.css";
import TodoListAlt from "./components/todo-list-alt";

// TodoListApp component
const App = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos];

    // Update new todos state
    newTodosState.push(todo);

    // Update todos state
    setTodos(newTodosState);
  }

  // Update existing todo item
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos];

    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
      event.target.value;

    // Update todos state
    setTodos(newTodosState);
  }

  // Remove existing todo item

  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos];

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;

    // Update todos state
    setTodos(newTodosState);
  }

  // Check if todo item has title
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  }

  function handleInvokeProgress(input: number) {
    console.log(input);
  }

  return (
    <div className="todo-list-app">
      <h1 className="header">To-do List</h1>

      <h3 className="sub-header">Working</h3>
      <TodoForm handleTodoCreate={handleTodoCreate} />

      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
        invokeProgress={handleInvokeProgress}
      />

      <h3 className="sub-header-alt">
        <span>✔</span>Done
      </h3>
      <TodoListAlt todosAlt={todos} />
    </div>
  );
};

export default App;
