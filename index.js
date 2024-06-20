const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const folderPath = path.join(__dirname, 'text_files');

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath)
}

// Endpoint to create a text file with the current timestamp
app.post('/create-file', (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().replace(/:/g, '-').replace(/\..+/, '');
  const fileName = `${formattedDate}.txt`;
  const filePath = path.join(folderPath, fileName);
  const timeStamp = currentDate.toString();

  fs.writeFile(filePath, timeStamp, (err) => {
    if (err) {
      return res.status(500).send('Failed to create file');
    }
    res.send(`File created: ${fileName}`);
  });
});

// Endpoint to retrieve all text files in the folder
app.get('/list-files', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).send('Failed to retrieve files');
    }
    res.send(files);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
