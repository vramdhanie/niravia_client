import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/icon.png";
import { MdSwapHoriz } from "react-icons/md";

const Card = ({ className }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={className}>
      <div className="flipBtn" onClick={e => setFlipped(!flipped)}>
        <MdSwapHoriz />
      </div>
      {flipped ? (
        <div className="face"></div>
      ) : (
        <img src={logo} alt="Card Logo" />
      )}
    </div>
  );
};

export default styled(Card)`
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 175px;
  height: 250px;
  background: var(--primaryDark);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  img {
    object-fit: fill;
    width: 100%;
  }

  .face {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: #ffffff;
  }

  .flipBtn {
    position: absolute;
    top: 2px;
    right: 2px;
    opacity: 0.5;
    transition: var(--mainTransition);
    color: var(--primaryLight);
    &:hover {
      opacity: 1;
    }
  }
`;
