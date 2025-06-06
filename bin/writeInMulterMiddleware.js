import fs from "fs/promises" 



export default async function writeInMulterMiddleware( repoName ) {
  try {
    const content = `import multer from "multer";
    
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "./public/temp")
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, file.originalname)
        }
    })
     
    export const upload = multer({ storage: storage }) 
`
    await fs.writeFile(`${repoName}/src/middlewares/multer.middleware.js`, content);
  } catch (err) {
    console.log(err);
  }
}
