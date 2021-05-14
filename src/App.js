
import React, { useState } from 'react';

import './App.css';
import TopBar from './components/TopBar/TopBar';
import Jarallax from './components/Jarallax/Jarallax';
// import Parallax from './components/Parallax/Parallax';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lime from '@material-ui/core/colors/lime';
import feet from './assets/feet.jpg';

function App() {
  // const theme = useTheme();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: amber[500],
      },
      secondary: {
        main: lime.A700,
      },
    },
  });

  const [parallax] = useState({img: feet, speed: 0.2});


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TopBar></TopBar>
      <Jarallax { ...parallax } >
        Medicinsk fotvård nära dig
      </Jarallax>
      {/* <Parallax { ...parallax } ></Parallax> */}

      <div className="jumbo"></div>
      <div className="window"></div>
    </div>
    </ThemeProvider>
  );
}

export default App;
