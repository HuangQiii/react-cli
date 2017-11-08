import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Route from './Route';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
            <li><NavLink activeClassName="active" to="/error">404</NavLink></li>
          </ul>
        </header>
        <Route routes={this.props.routes}></Route>
      </div>
    );
  }
}

export default App;