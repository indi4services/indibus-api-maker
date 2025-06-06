import fs from "fs/promises" 



export default async function writeInPackage( repoName ) {
  try {
    const content = `{
  "name": "create-indibus-api",
  "version": "1.0.1",
  "description": "Indibus Framework for api building ",
  "main": "src/index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js"
  },
  "bin": "./bin",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/indi4services/indibus-api-maker.git"
  },
  "author": "Zift API building",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/indi4services/indibus-api-maker/issues"
  },
  "homepage": "https://github.com/indi4services/indibus-api-maker#readme",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.6.0",
    "cookie-parser": "^1.4.7",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.13.2",
    "multer": "^1.4.5-lts.2",
    "nodemon": "^3.1.9",
    "socket.io": "^4.8.1",
    "uuid": "^11.1.0"
  }
}

`
    await fs.writeFile(`${repoName}/package.json`, content);
  } catch (err) {
    console.log(err);
  }
}
