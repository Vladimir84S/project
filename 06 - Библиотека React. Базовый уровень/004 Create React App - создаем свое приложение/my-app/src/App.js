// import logo from './logo.svg';
// import React from 'react';
import { Component, StrictMode } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

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
      {/* <WhoAmi
        name={{ firstName: 'John' }}
        surname="Smith"
        link="facebook.com"
      />
      <WhoAmi name={{ firstName: 'Alex' }} surname="Shepard" link="vk.com" /> */}
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Shepard" link="vk.com" />

      <StrictMode>
        <Header />
      </StrictMode>
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
