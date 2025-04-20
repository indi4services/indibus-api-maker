import fs from "fs/promises" 



export default async function writeInIndex( repoName ) {
  try {
    const content = `import dotenv from "dotenv";
import server from "./server.js";
import { error } from "node:console";
import io from "./socket.js";
import connectDB from "./db/index.js";

dotenv.config({
  path:"./.env", 
});


const serverPort = process.env.PORT || 8080;

connectDB()
  .then(() => {
    server.on("error", () => {
      console.log("Error Occured at index.js", error);
    });

    server.listen(serverPort, () => {
      console.log({
        serverStatus: "🌐  Application is Running",
        URL: "🔗 http://localhost:8080",
      });
    });
  })
  .catch((error) => {
    console.log("DB connection Failed from Index.js", error);
  }); 
`
    await fs.writeFile(`${repoName}/src/index.js`, content);
  } catch (err) {
    console.log(err);
  }
}
