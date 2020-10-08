import React, {Component} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';

export class DeleteModal extends Component{

	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
      show: false,
      email: '',
      first_name: '',
      last_name: ''
		};
  }
  
  handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
  }
  
  changeHandler = (e) =>{
    this.setState({ [e.target.name]: e.target.value} )
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('https://reqres.in/api/users/{id}', this.state)
    .then(response =>{
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  render(){
    const { email, first_name, last_name} = this.state
    return(
      <div className="flex">
        <>
          <Button variant="danger" className="float-right" onClick={this.handleShow}>
            Delete
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title >Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form onSubmit={this.submitHandler}>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={this.changeHandler} placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" value={first_name} onChange={this.changeHandler} placeholder="Enter your first name" />
              </Form.Group>

              <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last_name" value={last_name} onChange={this.changeHandler} placeholder="Enter your last name" />
              </Form.Group>

              <Modal.Footer>
                <Button variant="danger" type="submit" onClick={this.handleClose}>
                  Delete
                </Button>
                <Button variant="secondary" onClick={this.handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>

            </Modal.Body>
  
          </Modal>
          </>
      </div>
    )
  }
}