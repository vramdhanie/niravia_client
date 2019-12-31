import React from "react";
import { render } from "@testing-library/react";
import Help from "./help";

test("renders the Help", () => {
  const { getByText } = render(<Help />);
  const linkElement = getByText(/How to Play/i);
  expect(linkElement).toBeInTheDocument();
});
