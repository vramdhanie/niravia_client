import React from "react";
import styled from "styled-components";

const PlayerBoard = ({ className, name, hp, at }) => {
  return (
    <div className={className}>
      <h1>{name}</h1>
      <div className="profile">
        <div>HP: {hp}</div>
        <div>AT: {at}</div>
      </div>
    </div>
  );
};

export default styled(PlayerBoard)`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 1rem;

  h1 {
    background: var(--primaryDark);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: var(--mainWhite);
    text-align: center;
    margin: 0;
    padding: 2px;
  }

  .profile {
    display: flex;
    background: var(--primary);
  }
`;
