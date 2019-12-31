import React from "react";
import styled from "styled-components";

const Lobby = ({ className }) => {
  return <div className={className}>Select a Game</div>;
};

export default styled(Lobby)`
  background: var(--primaryLight);
`;
