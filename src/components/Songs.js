import React,{Component} from 'react';
const axios = require("axios");

class Songs extends Component{

   // state={message:'',redirect:false};

    componentDidMount(){

/*
           fetch('http://localhost:8000/users')
           .then(res=>if(res.ok)this.setState({})res.text())
           .then(res=>{this.setState({message: res})
    });*/

           
       axios.get('http://localhost:8000/users')
       .then(res=>{
          console.log("good");
       })
       
    

           
          

        




    }

    render(){
            /*if(this.state.redirect){
                return <Redirect to=""/?>
            }*/

        return(
            <div>
                
                      
                  
                
                
            </div>
        )


    }

   








}

export default Songs;