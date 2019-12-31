import React from "react";
import styled from "styled-components";

const Game = ({ className }) => {
  return <div className={className}>Play the Game</div>;
};

export default styled(Game)`
  background: var(--secondaryLight);
`;
