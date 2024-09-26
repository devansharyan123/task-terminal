const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('read')
  .description('Read a file and print its content')
  .argument('<file>', 'File to read')
  .action((file) => {
    fs.readFile(file, 'UTF-8', (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
      } else {
        console.log(data);
      }
    });
  });


program.command('write')
  .description('Write data to a file with a new line')
  .argument('<file>', 'File to write to') 
  .argument('<data>', 'Data to write')
  .action((file, data) => {
   
    const content = `\n${data}`;
    
   
    fs.appendFile(file, content, 'UTF-8', (err) => {
      if (err) {
        console.log("Error writing to file:", err);
      } else {
        console.log("Successfully saved data to the file on a new line.");
      }
    });
  });

program.parse();
