import fs from "fs/promises" 



export default async function writeInIndexDB( repoName ) {
  try {
    const content = `import mongoose from "mongoose"
    import { DBName } from "../constants.js";
    
    
    const connectDB = async () =>{
        try {
            const connectInstance = await mongoose.connect("a{process.env.MONGO_URI}/a{DBName}") // make a into $ and " to backtick
            console.log("\n MongoDB Connected !! DB host : a{connectInstance.connection.host}"); // make a into $ and " to backtick        } catch (error) {
            console.log("Error: "+ error)
            process.exit(1)
        }
    }
    
    
    export default connectDB
`
    await fs.writeFile(`${repoName}/src/db/index.js`, content);
  } catch (err) {
    console.log(err);
  }
}
