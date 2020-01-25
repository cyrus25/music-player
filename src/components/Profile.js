import React,{Component} from 'react';
import { Route , withRouter} from 'react-router';
import Search from './Search';

import SignIn from './SignIn';


class Profile extends Component{

render(){


    const{id}=this.props.location.state;

   return(


              <div>
                 
                   
            
                   
                  
                 
                 <Search />

              </div>



   );




}




}

export default Profile;


