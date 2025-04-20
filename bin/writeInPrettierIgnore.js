import fs from "fs/promises" 



export default async function writeInPrettierIgnore( repoName ) {
  try {
    const content = `/.vscode
/node_modules
/.dist
*.env
.env
.env.*   
`
    await fs.writeFile(`${repoName}/.prettierignore`, content);
  } catch (err) {
    console.log(err);
  }
}
