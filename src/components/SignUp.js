import React from 'react';
import axios from 'axios';
import Search from './Songs';
import {Link} from 'react-router-dom';
import Header from './Header';

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }
  
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }



  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password

    }
  // console.log(user);
    axios.post('http://localhost:8000/signup',user)
      .then(res => {
        console.log(res.data);
        
      });

      window.location = '/signin';
      
     
      

   /* axios.get('http://localhost:8000/users')
      .then(res=>{
          console.log(response);
      });*/
  }

  render() {
      console.log(this.state);
    return (
      <div>
          <Header />
          <h1>SignUp</h1><br/>
        <form onSubmit={this.handleSubmit}>
          
            <input type="text" name="name" placeholder="Enter name" onChange={this.handleChangeName} /><br/>
            <input type="email" name="email" placeholder="Enter email" onChange={this.handleChangeEmail} /><br/>
            <input type="password" name="password" placeholder="Enter password"  onChange={this.handleChangePassword} /><br/>

         
             <button type="submit">Register</button>
        </form>
        <Link to='/signin'></Link>
        
        

      </div>
    )
  }
}
export default SignUp;
