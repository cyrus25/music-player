import React,{Component} from 'react';
import { Route , withRouter} from 'react-router';
import Search from './Search';

import SignIn from './SignIn';


class Profile extends Component{

render(){


    const name=this.props.location.state.id;

   return(


              <div>
                 
                   <p>{name}</p>
            
                   
                  
                 
                 <Search />

              </div>



   );




}




}

export default Profile;


