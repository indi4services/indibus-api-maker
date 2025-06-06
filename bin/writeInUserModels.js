import fs from "fs/promises" 



export default async function writeInUserModel( repoName ) {
  try {
    const content = `import mongoose, {Schema} from "mongoose"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"


const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique : true,
        lowercase:true,
        trim:true
    },
    firstName:{
        type: String,
        lowercase:true,
        trim:true,
    },
    lastName:{
        type: String,
        lowercase:true,
        trim:true,
    },
    avatar:{
        type: String,
    },
    password:{
        type: String, 
        required:[true,"Password is Required"]
    }
}, 
{
timestamps:true
})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){ 
    return  jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    }, process.env.ACCESS_TOKEN_SECRET)
}


export const User = mongoose.model("User", userSchema)


`
    await fs.writeFile(`${repoName}/src/models/user.models.js`, content);
  } catch (err) {
    console.log(err);
  }
}
