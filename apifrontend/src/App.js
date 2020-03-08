import React, { Component } from 'react';
import logo from './Img/biohazard-transparent-background-6-transparent.png';
import './App.css';
import './app.sass';
import Chart from "./component/composedChart"





// fetch('http://localhost:8181/')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// });

class App extends Component {
  render() {
    return (
      <section class="hero is-dark is-fullheight">
  {/* <!-- Hero head: will stick at the top --> */}
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={logo}  alt="Logo"></img>
            Corona Virus
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-dark is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
                <Link to="https://github.com/AMontilla8/Api-project-Front-End" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  {/* <!-- Hero content: will be in the middle --> */}
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
      </h1>
      <h2 class="subtitle">
        Subtitle
       <Chart />
      </h2>
    </div>
  </div>

  {/* <!-- Hero footer: will stick at the bottom --> */}
  {/* <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div> */}
</section>
    );
  }
}

export default App;