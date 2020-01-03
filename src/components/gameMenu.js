import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GameMenu = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/">Home</Link>
    </div>
  );
};

export default styled(GameMenu)`
  width: 100%;
  height: 100%;
  background: var(--primaryLight);
  border-radius: 8px;
`;
