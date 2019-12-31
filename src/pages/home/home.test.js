import React from "react";
import { render } from "@testing-library/react";
import Home from "./home";

test("renders the home page", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Realm of Niravia/i);
  expect(linkElement).toBeInTheDocument();
});
