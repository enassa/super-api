const fs = require("fs");

const Pdfmake = require("pdfmake");

var fonts = {
  Roboto: {
    normal: _dirname + "/fonts/roboto/Roboto-Regular.ttf",
    bold: _dirname + "fonts/roboto/Roboto-Medium.ttf",
    italics: _dirname+  "fonts/roboto/Roboto-Italic.ttf",
    bolditalics: _dirname "fonts/roboto/Roboto-MediumItalic.ttf",
  },
};

let pdfmake = new Pdfmake(fonts);

let docDefination = {
  content: ["Hello World!"],
};

let pdfDoc = pdfmake.createPdfKitDocument(docDefination, {});
pdfDoc.pipe(fs.createWriteStream(_dirname + "/pdfs/test.pdf"));
pdfDoc.end();
