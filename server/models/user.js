import mongoose , {mongo} from 'mongoose';

const UserSchema = new mongoose.Schema({
    // USERNAME
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
    },
},{timestamps:true});

export default mongoose.model("User",UserSchema);