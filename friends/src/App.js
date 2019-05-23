import React, { Component } from 'react';
import './App.css';
import FriendsList from './Component/FriendsList';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>  
      <div className="body">
        <h1 className="header" to="/">Friends List</h1>

        <div className="navbar-2">
          <NavLink className="nav-info nav-link" to="/add">Add Friend</NavLink>
        </div>        
      </div>

      <div className="container">
        <FriendsList />
      </div>
    </div>
    );
  }
}

export default App;