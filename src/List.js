import React, { Component } from 'react'
import {Col, Modal, Button, Glyphicon} from 'react-bootstrap'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: JSON.parse(localStorage.getItem('data')) || [],
      isGoing: false,
      open:'',
      mode: ''
    }
  }
  handleInputChange(event) { 
    const {checkbox} = this.props
    const todos = JSON.parse(localStorage.getItem('data')) || []
   
    for(const i in  todos){
      if(todos[i].id === Number(event.target.id) ){
          if(todos[i].status === true){
            todos[i].status = false
            localStorage.setItem('data', JSON.stringify(todos))
            this.setState({
              isGoing: false,
              idAlert: false,
              todos: todos
            })
            checkbox(todos)
          }else{
            todos[i].status = true
            localStorage.setItem('data', JSON.stringify(todos))
            this.setState({
              isGoing: true,
              todos: todos
            })
            checkbox(todos)
            
          } 
      } 
    }
  }
  onEdit(event) {
    const {edit} = this.props
    const list = JSON.parse(localStorage.getItem('data')) || []

    for(const i in  list){
      if(list[i].id === Number(event.target.id) ){
        edit(list[i])
        this.setState({
          todos: list
        })
        localStorage.setItem('data', JSON.stringify(list))
      }
    }
  
  }
  onDelete(event) {
    const {del} = this.props
    const list = JSON.parse(localStorage.getItem('data')) || []

    for(const i in  list){
      if(list[i].id === Number(event.target.id) ){
        list.splice(i,1)
        this.setState({
              todos: list
        })
        localStorage.setItem('data', JSON.stringify(list))
        del(list)
      }
    }
  }
  getInitialState() {
    return { show: false }
  }
  handleAlertShow(value) {
    this.setState({alertVisible: true, idAlert: value.target.id, show: true})
    console.log(value.target.id)
  }

  render() {
    const close = () => this.setState({ show: false})
    const {todos} = this.props
    return (
      <div style={{ height: '100%', color: '#000', padding: 10  }}>
         { todos.map((data, index) => (
          <div key={data.id} style={{ padding: 3 }}>
            <div>

              <li className="list-group-item" onClick={() => {}} >
                <Col xs={1} md={1} >
                { data.status ?
                  <input
                    type="checkbox"
                    checked={data.status}
                    onChange={this.handleInputChange.bind(this)} 
                    id={data.id}
                  /> : <input
                    type="checkbox"
                    checked={data.status}
                    onChange={this.handleInputChange.bind(this)} 
                    id={data.id}
                  /> }
                </Col>
                <Col xs={8} md={8} >
                { data.status ? 
                  <strike onClick={this.handleAlertShow.bind(this)} id={data.id}> { data.topic } </strike> 
                  : 
                  <span onClick={this.handleAlertShow.bind(this)} id={data.id}> {data.topic }</span> 
                }
                {this.state.alertVisible && data.id === Number(this.state.idAlert) ? 
                  <div className="modal-container">
                    <Modal
                      show={this.state.show}
                      onHide={close}
                      container={this}
                      aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton >
                      <Modal.Title id="contained-modal-title"><h3>{ data.topic +" Date : "+ data.date }</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5 in={this.state.open} id={data.id}> { data.description } </h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={close} id={data.id}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                   </div>
                  : null
                }
                </Col>
                <Button bsSize="small" bsStyle="link" onClick={this.onEdit.bind(this)} id={data.id}><Glyphicon glyph="pencil" id={data.id}/></Button>
                <Button bsSize="small" bsStyle="danger" onClick={this.onDelete.bind(this)} id={data.id}><Glyphicon glyph="trash" id={data.id}/></Button>
                
              </li>

              
              
              
            </div>
            
          </div>
        ))}  
      </div>
    )
  }
}

export default List
