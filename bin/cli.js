#!/usr/bin/env node

import {execSync} from "child_process"
import writeInGitIgnore from "./writeInGitIgnore";
import writeInPrettierIgnore from "./writeInPrettierIgnore";
import writeInPrettierRC from "./writeInPrettierRC";
import writeInPackageLock from "./writeInPackageLock";
import writeInPackage from "./writeInPackege";
import writeInENV from "./writeInENV";
import writeInIndex from "./writeInIndex";
import writeInAPPFile from "./writeInAppFile";
import writeInServer from "./writeInServer";
import writeInSocket from "./writeInSocket";
import writeInConstants from "./writeInConstants";
import writeInUserController from "./writeInUserController";
import writeInUserRoutes from "./writeInUserRoutes";
import writeInUserModel from "./writeInUserModels";
import writeInTokenModel from "./writeInTokenModels";
import writeInAPIError from "./writeInAPIError";
import writeInAsyncHandler from "./writeInAsyncHandler";
import writeInCloudinary from "./writeInCloudinaryUtil";
import writeInAPIResponse from "./writeInAPIResponse";
import writeInMulterMiddleware from "./writeInMulterMiddleware";
import writeInAuthMiddleware from "./writeInAuthMiddleware";
import writeInIndexDB from "./writeInIndexDB";


const runCommand =  command => {
    try {
        execSync(`${command}`,{studio:'inherit'})
    } catch (e) {
        console.error(`Failed to execute ${command}`,e);
        return false
    }
    return true
}


const repoName = process.argv[2];

// creating command
const makeApp = `mkdir ${repoName}`
const changeToApp = `cd ${repoName}`

const createPublicFolder = `cd ${repoName} && mkdir public`
const createTemp = `cd ${repoName} && mkdir public && mkdir temp`
const creategitignore = `cd ${repoName} && touch .gitignore`
const createPrettierIgnore = `cd ${repoName} && touch .prettierignore` 
const createPrettierrc = `cd ${repoName} && touch .prettierrc`
const createpackage_lock = `cd ${repoName} && touch package-lock.json`
const createPackage = `cd ${repoName} && touch package.json`
const createREADME = `cd ${repoName} && touch README.md`
const createENV = `cd ${repoName} && touch .env`

const createSRC = `cd ${repoName} && mkdir src`

//creating Commands of  src folder

const createIndex = `cd ${repoName} && cd src && touch index.js`
const createApp = `cd ${repoName} && cd src && touch app.js`
const createServer = `cd ${repoName} && cd src && touch server.js`
const createSocket = `cd ${repoName} && cd src && touch socket.js`
const createConstants = `cd ${repoName} && cd src && touch constants.js`

//controllers 
const createControllers = `cd ${repoName} && cd src && mkdir controllers`
const createUserController = `cd ${repoName} && cd src && cd controllers && touch user.controller.js`

//routes
const createRoutes = `cd ${repoName} && cd src && mkdir routes`
const createUserRoutes = `cd ${repoName} && cd src && cd routes && touch user.routes.js`

//models
const createModels = `cd ${repoName} && cd src && mkdir models`
const createUserModel = `cd ${repoName} && cd src && cd models && touch user.models.js`
const createTokenModel = `cd ${repoName} && cd src && cd models && touch tokens.models.js`

//utils
const createUtils = `cd ${repoName} && cd src && mkdir utils`
const createAPIError = `cd ${repoName} && cd src && cd utils && touch APIerror.js`
const createAsyncHandler = `cd ${repoName} && cd src && cd utils && touch asyncHandler.js`
const createCloudinary = `cd ${repoName} && cd src && cd utils && touch cloudinary.js`
const createAPIResponse = `cd ${repoName} && cd src && cd utils && touch APIresponse.js`

//middlewares
const createMiddlewares = `cd ${repoName} && cd src && mkdir middlewares`
const createAuthMiddleware = `cd ${repoName} && cd src && cd middlewares && touch auth.middleware.js`
const createMulterMiddleware = `cd ${repoName} && cd src && cd middlewares && touch multer.middleware.js`

//db
const createDB = `cd ${repoName} && cd src && mkdir db`
const createDBIndex = `cd ${repoName} && cd src && cd db && touch index.js`



// running command
const appCreated = runCommand(makeApp);
if(!appCreated) process.exit(-1)
const appPathChange = runCommand(changeToApp)
if(!appPathChange) process.exit(-1)


const publicFolderCreated = runCommand(createPublicFolder)
if(!publicFolderCreated) process.exit(-1)

const tempFolderCreated = runCommand(createTemp)
if(!tempFolderCreated) process.exit(-1)
    
const gitignoreCreated = runCommand(creategitignore)
if(!gitignoreCreated) process.exit(-1)
writeInGitIgnore(repoName)
const prettierIgnoreCreated = runCommand(createPrettierIgnore)
if(!prettierIgnoreCreated) process.exit(-1)
writeInPrettierIgnore(repoName)
const prettierrcCreated = runCommand(createPrettierrc)
if(!prettierrcCreated) process.exit(-1)
writeInPrettierRC(repoName)
const packageLockCreated = runCommand(createpackage_lock)
if(!packageLockCreated) process.exit(-1)
writeInPackageLock(repoName)
const packageCreated = runCommand(createPackage)
if(!packageCreated) process.exit(-1)
writeInPackage(repoName)
const readmeCreated = runCommand(createREADME)
if(!readmeCreated) process.exit(-1)
const envCreated = runCommand(createENV)
if(!envCreated) process.exit(-1)
writeInENV(repoName)


//src folder Creation

const srcFolderCreated = runCommand(createSRC)
if(!srcFolderCreated) process.exit(-1)

const indexCreated = runCommand(createIndex)
if(!indexCreated) process.exit(-1)
writeInIndex(repoName)

const appFileCreated = runCommand(createApp)
if(!appFileCreated) process.exit(-1)
writeInAPPFile(repoName)

const serverCreated = runCommand(createServer)
if(!serverCreated) process.exit(-1)
writeInServer(repoName)

const socketCreated = runCommand(createSocket)
if(!socketCreated) process.exit(-1)
writeInSocket(repoName)

const constantsCreated = runCommand(createConstants)
if(!constantsCreated) process.exit(-1)
writeInConstants(repoName)

//controllers Folder Creation 
const controllersFolderCreated = runCommand(createControllers)
if(!controllersFolderCreated) process.exit(-1)

const userControllerCreated = runCommand(createUserController)
if(!userControllerCreated) process.exit(-1)
writeInUserController(repoName)  

//routes Folder Creation
const routesFolderCreated = runCommand(createRoutes)
if(!routesFolderCreated) process.exit(-1)

const userRoutesCreated = runCommand(createUserRoutes)
if(!userRoutesCreated) process.exit(-1)
writeInUserRoutes(repoName)

//models Folder Creation
const modelsFolderCreated = runCommand(createModels)
if(!modelsFolderCreated) process.exit(-1)

const userModelCreated = runCommand(createUserModel)
if(!userModelCreated) process.exit(-1)
writeInUserModel(repoName)

const tokenModelCreated = runCommand(createTokenModel)
if(!tokenModelCreated) process.exit(-1)
writeInTokenModel(repoName)

//utils Folder Creation
const utilsFolderCreated = runCommand(createUtils)
if(!utilsFolderCreated) process.exit(-1)

const APIErrorCreated = runCommand(createAPIError)
if(!APIErrorCreated) process.exit(-1)
writeInAPIError(repoName)

const asyncHandlerCreated = runCommand(createAsyncHandler)
if(!asyncHandlerCreated) process.exit(-1)
writeInAsyncHandler(repoName)

const cloudinaryCreated = runCommand(createCloudinary)
if(!cloudinaryCreated) process.exit(-1)
writeInCloudinary(repoName)

const APIResponseCreated = runCommand(createAPIResponse)
if(!APIResponseCreated) process.exit(-1)
writeInAPIResponse(repoName)

//middlewares Folder Creation
const middlewaresFolderCreated = runCommand(createMiddlewares)
if(!middlewaresFolderCreated) process.exit(-1)

const authMiddlewareCreated = runCommand(createAuthMiddleware)
if(!authMiddlewareCreated) process.exit(-1)
writeInAuthMiddleware(repoName)

const multerMiddlewareCreated = runCommand(createMulterMiddleware)
if(!multerMiddlewareCreated) process.exit(-1)
writeInMulterMiddleware(repoName)

//db Folder Creation

const dbFolderCreated = runCommand(createDB)
if(!dbFolderCreated) process.exit(-1)

const dbIndexCreated = runCommand(createDBIndex)
if(!dbIndexCreated) process.exit(-1)
writeInIndexDB(repoName)
console.log("All files created successfully")

console.log("Congratulations! You are Ready to create Servers");
console.log("Write the Following Commands");
console.log("---------------");
console.log(`cd ${repoName}`)
console.log("---------------");
console.log(`npm install`)
console.log("---------------");
console.log("Add MongoDB VScode URI from MongoDBAtlas in the env file")
console.log("---------------");
console.log("Add ACCESS and REFRESH Tokens in the ENV file");
console.log("---------------");
console.log("Configure your Account on https://cloudinary.com/")
console.log("Add cloud name, api key, api secret from cloudinary to the env file");
console.log("---------------");
console.log(`npm run dev`)
console.log("---------------");
console.log("Create Your API");

console.log("INDIBUS Softwares Solutions Pvt Ltd");