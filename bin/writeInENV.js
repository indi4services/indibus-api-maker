import fs from "fs/promises" 



export default async function writeInENV( repoName ) {
  try {
    const content = `PORT=8080
MONGO_URI=<your_mongo_uri>
CORS_ORIGIN=*


ACCESS_TOKEN_SECRET=<your_access_token_secret>
ACCESS_TOKEN_EXPIRY=1d


CLOUDINARY_CLOUD_NAME =  <your_cloud_name>
CLOUDINARY_API_KEY = <your_api_key>
CLOUDINARY_API_SECRET = <your_api_secret>

 
`
    await fs.writeFile(`${repoName}/.env`, content);
  } catch (err) {
    console.log(err);
  }
}
