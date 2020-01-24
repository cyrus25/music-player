import React,{Component} from 'react';
import SignUp from './SignUp';

import axios from 'axios';

class SignIn extends Component{
   
    state={
        email:'',
        password:''
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
         
          email: this.state.email,
          password: this.state.password,
        }
      
        axios.post('http://localhost:8000/signin',user)
          .then(res => {
                     console.log(res.data);
          });
    
    
          
    
        
      }

      

    render() {
       
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            
              
              <input type="text" name="email" placeholder="Enter email" onChange={this.handleChangeEmail} />
              <input type="password" name="password" placeholder="Enter password"  onChange={this.handleChangePassword} />
  
           
            <button type="submit">SignIn</button>
          </form>
        </div>
      )
    }



}

export default SignIn;