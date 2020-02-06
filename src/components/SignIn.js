import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Songs from './Songs';
//import { History } from 'react-router';
import {History} from 'react-router';
import { withRouter } from 'react-router'
//import { Link, withRouter } from "react-router-dom";
import Header from './Header';

import SignUp from './SignUp';

import axios from 'axios';

class SignIn extends Component{
   
    state={
        email:'',
        password:'',
        p:null,
        userid:'',
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
            console.log(res);
            if(res.data.user&&res.data.flag==1)
            {
               
                 console.log(res);
      this.setState({userid:res.data.user._id});
console.log('yello');

     window.location= '/users';

      //props.history.push("/users");

                
               
            }
            else if(res.data.user&&res.data.flag==0){
             window.location = '/signin';
            }
            else if(res.data.user==null)
            window.location = '/';

          });
    
    
         
    
        
      }

      

    render() {
       
      return (
        <div>
            <Header />
            <h1>LoginIn</h1>
          <br></br>
          
         
          <form onSubmit={this.handleSubmit}>
            
              
              <input type="text" name="email" placeholder="Enter email" onChange={this.handleChangeEmail} />
              <br></br>
              <input type="password" name="password" placeholder="Enter password"  onChange={this.handleChangePassword} />
              <br></br>
            <button type="submit">LoginIn</button>
          </form>

         
          <div>

         


          <Link to={{
      pathname: '/users',
      state:{
        id:this.state.userid,
        name:this.state.name
      }
      
     
    }}> Go to your profile </Link>

          </div>
         


          
          
        </div>
      )
    }



}

export default SignIn;

/*import React,{Component} from 'react';
import SignUp from './SignUp';
import Head from './Head'
import axios from 'axios';

class SignIn extends Component{
   
    state={email:'',password:''}
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
          <Head/>
          <h1>LoginIn</h1>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            
              
              <input type="text" name="email" placeholder="Enter email" onChange={this.handleChangeEmail} />
              <br></br>
              <input type="password" name="password" placeholder="Enter password"  onChange={this.handleChangePassword} />
              <br></br>
            <button type="submit">LoginIn</button>
          </form>
        </div>
      )
    }



}

export default SignIn;*/