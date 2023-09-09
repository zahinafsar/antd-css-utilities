const fs = require("fs");

const generate = (filePath, contentToWrite) => {
  fs.writeFile(`${filePath}`, contentToWrite, "utf8", (err) => {
    if (err) {
      console.error(`Error generating ${filePath}:`, err);
    } else {
      console.log(`Successfully generated ${filePath}`);
    }
  });
};

module.exports = generate;
