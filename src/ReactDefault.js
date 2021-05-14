import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);
  
    // return (
    //   <Toast show={show} onClose={() => toggleShow(!show)}>
    //     <Toast.Header>
    //       <strong className="mr-auto">React-Bootstrap</strong>
    //     </Toast.Header>
    //     <Toast.Body>{children}</Toast.Body>
    //   </Toast>
    // );
  };

function ReactDefault() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      {/* <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <ExampleToast>
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </Jumbotron>
    </Container> */}
      </div>
  );
}

export default ReactDefault;
