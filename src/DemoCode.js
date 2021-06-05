// THIS FILE IS FOR DEMONSTRATION, BUT NOT RUN

// New version
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// Old version used in the lecture

import React from 'react';
import logo from './logo.svg';
import './App.css';
 


class App extends React.Component {  // create a class "APP" which will inherit the methods from the "component" class https://www.w3schools.com/jsref/jsref_class_extends.asp
  render() {
    // the "render" method required by "component" returns HTML https://www.w3schools.com/react/react_components.asp
    return (  // virtual DOM of REACT, so that you can insert HTML syntax below in a js file
      // ↓ "class" is a reserved word in js, so turn it into "className"

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
      </div>
    );
  }
}
 
export default App;
// if we want other files to import this, we need to "export"
// "default" means this file only exports one thing
