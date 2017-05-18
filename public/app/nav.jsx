import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'green' };

const Nav = () => (
  <nav>
    <NavLink exact activeStyle={activeStyle} to="/">Home</NavLink>
    <NavLink activeStyle={activeStyle} to="/match">Match</NavLink>
  </nav>
);

export default Nav;
