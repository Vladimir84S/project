// import logo from './logo.svg';
// import React from 'react';
import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>;
};

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px',
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px',
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  const text = 'Log in';
  const logged = false;

  // const res = () => {
  //   return 'Log in';
  // };
  // const p = <p>Log in</p>;
  // return <button>{3+4}</button>;

  return <button>{logged ? 'Enter' : text}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export { Header };
export default App;
