const fs = require('node:fs/promises');

//1 . WRITE API END POINT WHICH WILL BE CREATE TEXT FILE IN A PARTICULAR FOLDER
// CONTENT OF THE FILE SHOULD BE CURRENT TIME STAMP
// THE FILENAME SHOULD BE CURRNET DATE-TIME.txt
function createFiles() {
    const timestamp = Date.now();
    const dateTime = new Date(timestamp).toISOString().replace(/:/g, "-").replace(/\..+/, '');
    const fileContent = timestamp.toString();
    const filePath = `./files/${dateTime}.txt`;
    fs.writeFile(filePath, fileContent, 'utf8')
    .then(() => console.log(`File "${filePath}" created with content: ${fileContent}`))
    .catch((error) => console.error('ERROR:', error));
}
createFiles();


// 2  WRTIE THW API END POINT FOR RETRIVER ALL THE TEXT FILE IN THE PARTICULAR FOLDER

function readingAllFile() {
    fs.readFile("./files")
    .then((data) => console.log(data))
    .catch((error) => {
        console.log(error)
    })
}

readingAllFile()



