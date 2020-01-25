const express=require('express');

const port=8000;
const db=require('./config/mongoose.js');

const User=require('./models/user');
const Song=require('./models/songs');
const axios=require('axios');
const cors = require('cors');

const bodyParser = require('body-parser');
const app=express();



app.use(cors());





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//app.use(express.urlencoded({ extended: true }));


    
app.get('/',function(req,res){


   console.log('cool');
   
})

app.post('/signup',function(req,res){

   const user=req.body;
  
 
   
   const newUser = new User(user);


   console.log("han");
   
  newUser.save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json('Error: ' + err));

   

    

     
    
})
app.post('/songs',function(req,res){
    const song=req.body;
    const newsong=new song(song);
})


app.post('/signin',(req,res)=>
{

 
 
 
     User.findOne({email:req.body.email})
     .then(user=>{

          if(user){


            if(req.body.password!=user.password){
                return res.json({user,flag:0});
            }
            return res.json({user,flag:1});
              

          }else{
              res.json({user,flag:0});
          }
          


     })
     .catch(err => res.status(400).json('Error: ' + err));
    

            


        

        




      



 
 







})




/*app.get('/users',function(req,res){
    return res.json(newUser);
})*/
   






app.listen(port,function(err){
    if(err)
    {
        console.log('error',err);
    }
    console.log('server is running');

})





