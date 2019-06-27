import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as themeConf from './theme';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './ThemeManager';

const App: React.FC = () => {

  const theme = useTheme();

  const Wrapper = styled.div`
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  `;

  const Button = styled.button`
    background: ${themeConf.buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${themeConf.buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
