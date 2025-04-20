import fs from "fs/promises" 



export default async function writeInAsyncHandler( repoName ) {
  try {
    const content = `const asyncHandler = (requestHandler) =>{
    return (req , res , next ) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
    }
}

export {asyncHandler}
`
    await fs.writeFile(`${repoName}/src/utils/asyncHandler.js`, content);
  } catch (err) {
    console.log(err);
  }
}
