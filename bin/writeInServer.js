import fs from "fs/promises" 



export default async function writeInServer( repoName ) {
  try {
    const content = `import { createServer } from 'node:http';
import app from './app.js';

const server = createServer(app)

export default server 
`
    await fs.writeFile(`${repoName}/src/server.js`, content);
  } catch (err) {
    console.log(err);
  }
}
