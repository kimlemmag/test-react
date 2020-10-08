import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {AddModal} from './AddModal';
import {EditModal} from './EditModal';
import {DeleteModal} from './DeleteModal';



export class Users extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://reqres.in/api/users?page=1&per_page=20')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json.data,
      })
    });
  }

  render(){
    var {isLoaded, items} = this.state;
    let addModalClose = () =>this.setState({addModalShow:false});
    let editModalClose = () =>this.setState({editModalShow:false});
    let deleteModalClose = () =>this.setState({deleteModalShow:false});

    if (!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return (
        <div >
          <AddModal show={this.state.addModalShow} onHide={addModalClose} />
          <div className="table-responsive">
            <Table className="mt-4" striped bordered hover >
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Actions button</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item =>(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.avatar}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>
                      <div>
                        <EditModal show={this.state.editModalShow} onHide={editModalClose} >Edit</EditModal>
                        <DeleteModal show={this.state.deleteModalShow} onHide={deleteModalClose} >Delete</DeleteModal>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }
  }
}