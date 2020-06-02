import React, { Component } from "react";

class Newuser extends Component {
  state = {
    user: {
        name:{
            title:"",
            first:"",
            last:"",
        },
        gender:"",
        dob:"",
        username:"",
        password:"",
        email:"",
        phone:""
    },
  };
  inputHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    const userDetails=this.state.user;
    userDetails.name=value;
    this.setState({ user: userDetails });
    console.log(this.state.user);
  };
  render() {
    return (
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputnametitle" name="user.name.title">Title</label>
            <input type="text" class="form-control" id="inputnametitle" onChange={this.inputHandler}/>
          </div>
          <div class="form-group col-md-4">
            <label for="inputFirstname" name="user.name.first">FirstName</label>
            <input type="text" class="form-control" id="inputFirstname" onChange={this.inputHandler} />
          </div>
          <div class="form-group col-md-4">
            <label for="inputLastname" name="user.name.last">LastName</label>
            <input type="text" class="form-control" id="inputLastname"onChange={this.inputHandler} />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputgender" name="user.gender">Gender</label>
            <input type="text" class="form-control" id="inputgender" onChange={this.inputHandler}/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputDOB" name="user.dob">DOB</label>
            <input type="text" class="form-control" id="inputDOB" onChange={this.inputHandler}/>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsername" name="user.username">Username</label>
            <input type="text" class="form-control" id="inputUsername" onChange={this.inputHandler}/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword" name="user.password">Password</label>
            <input type="password" class="form-control" id="inputPassword" onChange={this.inputHandler}/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail" name="user.email">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="xxx@gmail.com"
            onChange={this.inputHandler}
          />
        </div>
        <div class="form-group">
          <label for="inputmobile" name="user.phone">Phone</label>
          <input type="text" class="form-control" id="inputmobile" onChange={this.inputHandler}/>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default Newuser;
