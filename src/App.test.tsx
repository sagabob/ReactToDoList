import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("has to-do list title", () => {
    render(<App />);
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
  });

  it("has an input  with placeholder 'Enter new todo'", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText(/enter new todo/i)).toBeInTheDocument();
  });

  test("enter a new task with name", () => {
    const { getByPlaceholderText } = render(<App />);

    let inputTask = getByPlaceholderText(/Enter new task/i);

    expect(inputTask).toBeInTheDocument();
  });
});
