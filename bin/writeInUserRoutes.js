import fs from "fs/promises" 



export default async function writeInUserRoutes( repoName ) {
  try {
    const content = `import { Router } from "express";
import { registerUser,loginUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router() 

//user Auth operations

router.route("/register").post(upload.fields([
    {
        name:"avatar",
        maxCount:1
    }
]),registerUser)
router.route("/login/gi").post(loginUser)

//user crud operations 


export default router 
`
    await fs.writeFile(`${repoName}/src/routes/user.routes.js`, content);
  } catch (err) {
    console.log(err);
  }
}
