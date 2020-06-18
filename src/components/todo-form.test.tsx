import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./todo-form";

describe("Todo form", () => {
  it("has an input with placeholder 'Enter new todo'", () => {
    const mockHandleTodoCreate = jest.fn();

    const { getByPlaceholderText } = render(
      <TodoForm handleTodoCreate={mockHandleTodoCreate} />
    );

    // expect to see the title on top
    expect(getByPlaceholderText(/enter new todo/i)).toBeInTheDocument();
  });
});
