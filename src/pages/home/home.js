import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/themes";
import { Link } from "react-router-dom";

function Home({ className }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className={className}>
        <header className="home-header">
          Realm of Niravia
          <Link to="/lobby">Lobby</Link>
          <Link to="/help">Help</Link>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default styled(Home)`
  .home-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
