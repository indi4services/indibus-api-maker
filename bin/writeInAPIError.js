import fs from "fs/promises" 



export default async function writeInAPIError( repoName ) {
  try {
    const content = `class APIError extends Error {
    constructor(
        statusCode,  
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {APIError}
`
    await fs.writeFile(`${repoName}/src/utils/APIerror.js`, content);
  } catch (err) {
    console.log(err);
  }
}
