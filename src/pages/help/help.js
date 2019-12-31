import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Help = ({ className }) => {
  return (
    <div className={className}>
      How to Play
      <Link to="/">Home</Link>
    </div>
  );
};

export default styled(Help)`
  background: var(--secondaryDark);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
