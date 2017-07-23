import React, { Component } from 'react'
import {Nav, NavItem} from 'react-bootstrap'
class Sort extends Component {
  changeMode(event){
    const {mode} = this.props
    const list = JSON.parse(localStorage.getItem('data')) || []

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
  constructor(props) {
    super(props)

    var complete   = 0
		var uncomplete = 0
    const list = JSON.parse(localStorage.getItem('data')) || []

		var length = list.filter((item)=>{
			if(item.status === true) return (complete += 1)
			if(item.status === false) return (uncomplete += 1)
		})
    this.state = {
      all: list.length,
      complete: complete,
      uncomplete: uncomplete
    }

  }
  changeMode(event){
    const {mode} = this.props
    const todos = JSON.parse(localStorage.getItem('data')) || []
    this.setState = {
        all: todo.length,
        complete: com,
        uncomplete: un
    }
    if(event.target.id === "all"){
        mode("all")
        countTodo( this.state )
    }else{
        if(event.target.id === "complete"){
          mode("complete")
          countTodo( this.state )
        }
        else if(event.target.id === "uncomplete"){
          mode("uncomplete")
          countTodo( this.state )
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
          <NavItem onClick={this.changeMode.bind(this)} id='all'>All {this.state.all}</NavItem>
          <NavItem onClick={this.changeMode.bind(this)} id='complete'>Complete {this.state.complete}</NavItem>
          <NavItem onClick={this.changeMode.bind(this)} id='uncomplete'>UnComplete {this.state.uncomplete}</NavItem>
        </Nav> 
      </div>
    )
  }
}

export default Sort
