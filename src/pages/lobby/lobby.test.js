import React from "react";
import { render } from "@testing-library/react";
import Lobby from "./lobby";

test("renders the Lobby", () => {
  const { getByText } = render(<Lobby />);
  const linkElement = getByText(/Select a Game/i);
  expect(linkElement).toBeInTheDocument();
});
