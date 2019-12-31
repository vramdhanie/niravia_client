import React from "react";
import { render } from "@testing-library/react";
import Game from "./game";

test("renders the Game", () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText(/Play the Game/i);
  expect(linkElement).toBeInTheDocument();
});
