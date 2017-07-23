import React, { Component } from 'react'
import {NavBrand, NavMenu, Button, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
            <div className="container">
                 <div className="navbar-header">
                    <Button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar">ffff</span>
                        <span className="icon-bar">dddd</span>
                        <span className="icon-bar">dddd</span>
                    </Button>
                </div>
                <div className="collapse navbar-collapse" id="navbar-collapse">

                </div> 
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
