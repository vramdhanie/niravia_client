import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Lobby = ({ className }) => {
  return (
    <div className={className}>
      Select a Game
      <Link to="/">Home</Link>
      <Link to="/game">Play</Link>
    </div>
  );
};

export default styled(Lobby)`
  background: var(--primaryLight);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
