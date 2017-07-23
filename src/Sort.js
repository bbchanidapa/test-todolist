import React, { Component } from 'react'
import {Nav, NavItem} from 'react-bootstrap'
class Sort extends Component {
  changeMode(event){
    const {mode} = this.props

    if(event.target.id === "all"){
      mode("all")
    }else{
        if(event.target.id === "complete"){
          mode("complete")
        }
        else if(event.target.id === "uncomplete"){
          mode("uncomplete")
        }
    }
  }

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem onClick={this.changeMode.bind(this)} id='all'>All</NavItem>
        <NavItem onClick={this.changeMode.bind(this)} id='complete'>Complete</NavItem>
        <NavItem onClick={this.changeMode.bind(this)} id='uncomplete'>UnComplete</NavItem>
        </Nav>
      </div>
    )
  }
}

export default Sort
