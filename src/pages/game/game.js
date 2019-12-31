import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Card from "../../components/card";

const Game = ({ className }) => {
  return (
    <div className={className}>
      Play the Game
      <Link to="/">Home</Link>
      <Card />
    </div>
  );
};

export default styled(Game)`
  background: var(--secondaryLight);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
