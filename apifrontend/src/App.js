import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './app.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Corona Virus Api  
      </h1>
      <h2 class="subtitle">
        Global Cases 
      </h2>
    </div>
  </div>
</section>
        <h1 className="title">Bulma</h1>

        <p className="subtitle">
          Modern CSS framework based on{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
          </a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
              <option>Country</option>
              <option>Date</option>
              <option>Geographic Id</option>
              <option>Konichiwa!</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
      </div>
    );
  }
}

export default App;