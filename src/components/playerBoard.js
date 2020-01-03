import React from "react";
import styled from "styled-components";

const PlayerBoard = ({ className }) => {
  return <div className={className}>This is the player board</div>;
};

export default styled(PlayerBoard)`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
