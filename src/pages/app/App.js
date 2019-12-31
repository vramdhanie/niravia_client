import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/themes";

function App({ className }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className={className}>
        <header className="App-header">Realm of Niravia</header>
      </div>
    </ThemeProvider>
  );
}

export default styled(App)`
  .App-header {
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
