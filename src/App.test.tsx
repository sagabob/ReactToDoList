import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("has 'to-do list' title", () => {
    render(<App />);

    // expect to see the title on top
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
  });

  it("has an input with placeholder 'Enter new todo'", () => {
    const { getByPlaceholderText } = render(<App />);

    // expect to see the input field to creat new task
    expect(getByPlaceholderText(/enter new todo/i)).toBeInTheDocument();
  });

  test("enter a new task with name", () => {
    const { getByPlaceholderText } = render(<App />);

    // locate the input
    let inputTask = getByPlaceholderText(/Enter new todo/i);

    // key in the new todo task title
    fireEvent.change(inputTask, { target: { value: "task 1" } });

    // press enter to complete creating the task
    fireEvent.keyPress(inputTask, { key: "Enter", code: 13, charCode: 13 });

    // we expect to see the task 'task 1'
    expect(screen.getByText(/task 1/i)).toBeInTheDocument();
  });
});
