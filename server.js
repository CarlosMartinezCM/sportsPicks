const express = require('express');
const fs = require('fs');
const readline = require('readline');
const app = express();
const port = 3000

app.get('/api/data', (req, res) => {
    const filePath = './nfl_teams.json';

    //Create a readable stream
    const readStream = fs.createReadStream(filePath);
    
    // Create an interface to read the stream line by line
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  // Send the data to the client as soon as it's read
  res.setHeader('Content-Type', 'application/json');
  res.write('['); // Assuming your JSON is an array

  rl.on('line', (line) => {
    // Process each line as it's read
    res.write(line + ','); // Send the line with a comma
  });

  rl.on('close', () => {
    // Close the array and end the response when the file is fully read
    res.write(']');
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


