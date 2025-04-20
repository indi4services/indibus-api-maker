import fs from "fs/promises" 



export default async function writeInConstants( repoName ) {
  try {
    const content = `export const DBName = 'exampleDBIndibusAPI'  
`
    await fs.writeFile(`${repoName}/src/constants.js`, content);
  } catch (err) {
    console.log(err);
  }
}
