const mongoose=require("mongoose");
const studentloginschema=new mongoose.Schema(
    {
    studentid:{
        type:String,
        unique:true,
        required:true
    },
    studentname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    mobile:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

const studentlogin=mongoose.model(
    "studentlogin",studentloginschema
);
module.exports=studentlogin;