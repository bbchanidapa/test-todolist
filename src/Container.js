import React, { Component } from 'react'
import {Col, Glyphicon, Row, FormControl, Button } from 'react-bootstrap'
import List from './List'
import Sort from './Sort'
import Navbar from './Navbar'

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			date: '',
			topic: '',
			description: '',
			todos: JSON.parse(localStorage.getItem('data')) || [],
			statusEdit: false,
      		mode: 'all'
		}
	}
	changeTopic(value) {
		this.setState({
			topic: value.target.value
		})
	}
	changeDescription(value) {
		this.setState({
			description: value.target.value
		})
	}
	changeDate(value) {
		this.setState({
			date: value.target.value
		})
	}
	addTodo = (value) => {
		value.preventDefault()
		const data = {
				id: Date.now(),
				topic: this.state.topic,
				description: this.state.description,
				date: this.state.date,
				status: false
		}
		this.state.todos.push(data)
		localStorage.setItem('data', JSON.stringify(this.state.todos))
		this.setState((prevState) => ({
			date: '',
			topic: '',
			description: ''
		}))
	}
	editTodo = (value) => {
		value.preventDefault()
		const list = JSON.parse(localStorage.getItem('data')) || []

		for(const i in  list){
     		if( list[i].id === this.state.id ){
				list[i].date = this.state.date
				list[i].topic = this.state.topic
				list[i].description = this.state.description
				localStorage.setItem('data', JSON.stringify(list))
			}
		}
		this.setState({ 
			statusEdit: false,
			todos: list,
			id: '',
			date: '',
			topic: '',
			description: '', 
		})
	}
	onEdit(value) {
		this.setState({
			statusEdit: true,
			id: value.id,
			date: value.date,
			topic: value.topic,
			description: value.description,
		}) 
	}
	onDelete(value){
		this.setState({todos:value})
	}
	onCheckbox(value){
		this.setState({todos:value})
	}
	changeMode(value){
		const list = JSON.parse(localStorage.getItem('data')) || []
		this.setState({mode: value})
	  	if(value === "all"){
			this.setState({todos: list})
		}else{
			const arr = []
			for(const index in list){
				if(list[index].status === true && value === "complete"){
					arr.push(list[index])
				}
				else if (list[index].status === false && value === "uncomplete"){
					arr.push(list[index])
				}
			}
			this.setState({todos: arr})
		}
	
	}
	 
  render() {
    return (
		<div>
			<Navbar/>
			<div className="container">
					<Col xs={12} md={8} >
					<div>
						<h2><Glyphicon glyph="calendar" /> Todolist </h2>
						<Sort mode={this.changeMode.bind(this)}/>
						<List todos={this.state.todos} edit={this.onEdit.bind(this)} del={this.onDelete.bind(this)} checkbox={this.onCheckbox.bind(this)}/>
					</div>
					</Col>
					<Col xs={0} md={4} >
						<div>
						{this.state.statusEdit? 
						<Col md={12}>
								<div>	
									<form onSubmit={this.editTodo}>
										<h2><Glyphicon glyph="pencil" />Edit </h2>
										<Row>
										<Col md={12}>	
											<h4>Todo </h4>
											<FormControl type='text'
												onChange={this.changeTopic.bind(this)}
												value={this.state.topic}
											/>
										</Col>
										<Col md={12}>
											<h4>Description </h4>
											<FormControl type='text' componentClass="textarea" 
												onChange={this.changeDescription.bind(this)}
												value={this.state.description}
											/>
										</Col>
										<Col md={6}>
											<h4>Date </h4>
											<FormControl type='date'
												onChange={this.changeDate.bind(this)}
												value={this.state.date}
											/>
										</Col>
										</Row><br/>
										<Row >
											<Col md={12}>
												<Button bsStyle="primary" type='submit'>Submit</Button>
											</Col>
										</Row>
									</form>
								</div>
						</Col>
						:
						<Col md={12}>
						<div>
							  <h2><Glyphicon glyph="plus" /> Add </h2>
								<form onSubmit={this.addTodo}>
									<Row>
									<Col md={12}>
										<h4>Todo </h4>
										<FormControl type='text'
											onChange={this.changeTopic.bind(this)}
											value={this.state.topic}
										/>
									</Col>
									<Col md={12}>
										<h4>Description </h4>
										<FormControl type='text' componentClass="textarea" 
											onChange={this.changeDescription.bind(this)}
											value={this.state.description}
										/>
									</Col>
									<Col md={6}>
										<h4>Date </h4>
										<FormControl type='date'
											onChange={this.changeDate.bind(this)}
											value={this.state.date}
										/>
									</Col>
									</Row><br/>
									<Row >
										<Col md={12}>
									    <Button bsStyle="primary" type='submit'>Submit</Button>
										</Col>
									</Row>
								</form>
						</div>
						</Col>
						}
					</div>
					</Col>
			</div>
		</div>
    )
  }
}

export default Container
