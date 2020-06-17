import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders to-do list title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/to-do list/i);
  expect(linkElement).toBeInTheDocument();
});
