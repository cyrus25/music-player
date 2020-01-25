const mongoose=require('mongoose');
const songSchema=new mongoose.Schema({

   id: {
       type:String,
       required:true,
       unique:true

   },
   previewUrl: {
       type: String,
       required: true
   }


},{
    timestamps:true
});



const Song=mongoose.model('Song',songSchema);

module.exports=Song;