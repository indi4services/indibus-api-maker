import fs from "fs/promises" 



export default async function writeInTokenModel( repoName ) {
  try {
    const content = `import mongoose,{ Schema } from "mongoose";

const tokenSchema = new Schema({
    accessToken:{
        type:String,
    },
    uuid:{
        type:String
    },
    latestipaddress:{
        type:String
    },
    ipaddresses:[
        {
            ipaddress:{
                type:String
            }
        }
    ]
},{
    timestamps:true
}) 


export const Token = mongoose.model("Token", tokenSchema)
`
    await fs.writeFile(`${repoName}/src/models/tokens.model.js`, content);
  } catch (err) {
    console.log(err);
  }
}
