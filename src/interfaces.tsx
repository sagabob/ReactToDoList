export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
  progress: TodoProgressInterface;
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
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[];
}

// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
}

export interface TodoProgressInterface {
  progress: ProgressInterface;
  invokeProgress: (input: ProgressInterface) => void;
}

export interface ProgressInterface {
  progress: number;
}
