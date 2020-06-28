export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
  progress: number;
}

// Todo form interface
export interface TodoFormInterface {
  handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;

  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invokeProgress: (input: number) => void;
  todos: TodoInterface[];
}

export interface TodoListAltInterface {
  todosAlt: TodoInterface[];
}

// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;

  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invokeProgress: (input: number) => void;
  todo: TodoInterface;
}

export interface ProgressInterface {
  invokeProgress: (input: number) => void;
  progress: number;
}

export interface ProgressBarInterface {
  progress: number;
}
