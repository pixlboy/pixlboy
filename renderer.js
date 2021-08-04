var html_to_pdf = require('html-pdf-node');
var fs = require('fs');

let options = { format: 'A4' };
let file = [{ url: "http://localhost:3000" }];

html_to_pdf.generatePdfs(file, options).then(output => {
  console.log("PDF Buffer:-", output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
//   fs.writeFile("resume.pdf", output[0].buffer, "binary", function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("The file was saved!");
//     }
// });
});