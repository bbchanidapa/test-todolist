import React, { Component } from 'react'
import {NavBrand, NavMenu, Button, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
            <div className="container">
              <center><h2>Todolist</h2></center>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
