import fs from "fs/promises" 



export default async function writeInAPIResponse( repoName ) {
  try {
    const content = `class APIresponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message 
        this.success = statusCode < 400
    }
} 

export {APIresponse}
`
    await fs.writeFile(`${repoName}/src/utils/APIresponse.js`, content);
  } catch (err) {
    console.log(err);
  }
}
