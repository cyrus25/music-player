const express=require('express');

const port=8000;
const db=require('./config/mongoose.js');

const User=require('./models/user');
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

   
  newUser.save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json('Error: ' + err));

   

    

     
    
})


app.post('/signin',function(req,res){

 // find the user
 var p;
 User.findOne({email: req.body.email}, function(err, user){


    
    if (user){

        // handle password which doesn't match
        if (user.password != req.body.password){
            p=0;
        }

        // handle session creation
        res.cookie('user_id', user.id);
        p=1;

    }else{
        // handle user not found

        p=0;
    }








})
.then(res=>res.json(p))
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





