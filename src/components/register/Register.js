import React from 'react';
import '../../styles/register.css';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      client: false,
      vendor: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const clientBox = target.type === 'checkbox' ? target.checked : target.value;
    const vendorBox = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      client: clientBox,
      vendor: vendor,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.refs.firstName.value);
    console.log(this.refs.lastName.value);
    console.log(this.refs.email.value);
    console.log(this.refs.password.value);
    var users = JSON.parse(localStorage.getItem("users"));
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let number = this.refs.number.value;
    let uid = firstName.concat(lastName);
    // users.uid = {
    //   uid,
    //   contact_info:{
    //     name :firstName + ' ' + lastName,
    //     phone_number: number,
    //     email: email,
    //     address: "none"
    //   },
    //   "banda_ms.jpg",
    //   "business",
    //   "none",
    //   {},
    //   "none"
    // };
    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      client: clientBox,
      vendor: vendor,
    })
   // alert('A name was submitted: ' + this.state.firstName.value);
  }
    render() {
      return (
        <div id="pagedivR">
          <div id="contentdivR">
          <label>
          <h3>Register an Account</h3>
          </label>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                <div id = "nameid">
                  First Name:
                  <input type="text" ref="firstName" value={this.state.firstName}  onChange={this.handleChange}/>
                </div>
              </label>
              <label>
                <div id = "nameid">
                  Last Name:
                  <input type="text" ref="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                </div>
              </label>
              <label>
                <img src="./img/planner/diagonal.jpg" width="255" height="200" alt="tacos.jpeg" />
                <br />
                <input id="photoidR" type="file" name="photo" accept="image/gif, image/jpeg, image/png" onChange="displayImg()" />
              </label>
              <br />
              <label>
                Email:
                <input id="emailidR" ref="email"type="email" value={this.state.email} onChange={this.handleChange} />
              </label>
              <br />
              <label>
                Password:
                <input id="passwordidR" ref="password" type="password" value={this.state.password} onChange={this.handleChange} />
              </label>
              <br />
              <label>
                Phone Number:
                <input type="tel" ref="number"value={this.state.phoneNumber} onChange={this.handleChange} />
              </label>
              <br />
              <label>
                Client
                <input id="cradioidR" type="checkbox" name="clientvendor" checked={this.state.client} />
              </label>
              <br />
              <label>
                Vendor            
                <input id="vradioidR" type="checkbox" name="clientvendor" checked={this.state.vendor} />
              </label>
              <br />
              <input type="submit" value="Join Now" />
        </form>
        </div>
      </div>
      )
    }
  }
  
  export default Register;