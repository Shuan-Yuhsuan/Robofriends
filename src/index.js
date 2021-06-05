// REACT specific: we can import whatever files or packages we want at the top of the js file by "import"
import React from 'react';
import ReactDOM from 'react-dom'; // what screen we're rendering to. ReactDOM is used for the Dom for websites
import './index.css';     // refers to the "index.css" in the same directory.
// React allows us to apply different css files to each component, so we've got "index.css" for "index.js", and "App.css" for "App.js"
// import Card from './Card';  // refers to "App.js" in the same folder
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(element, b): display "element" in b https://reactjs.org/docs/rendering-elements.html

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
