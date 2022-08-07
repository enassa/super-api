const ReportSchema = require("../models/Reportmodel");
const mongoose = require("mongoose");
// const getConnection = require("../app");
const express = require("express");
const router = express.Router();
const reader = require("xlsx");
const excelToJson = require("convert-excel-to-json");
var path = require("path");
var root = path.dirname(require.main.filename);
var tmp = require("tmp");
var fs = require("fs");
const multer = require("multer");
const { response } = require("express");
const { file } = require("tmp");
let Student;

// Display list of all Genre.
exports.uploadReportCards = function (req, res) {
  console.log(req.files.file);
  const alls = [];
  const saveDataInDb = (sheetNo, rowNo, className, reportData) => {
    if (rowNo === 0) return {};
    ret;
    const reportObj = {
      Year: reportData["A"],
      Unique_Id: reportData["F"],
      File_Name: reportData["D"],
    };
    Student.create(studObj)
      .then((resp) => {
        // console.log(resp);
        return resp;
      })
      .catch((err) => {
        // console.log(err);
        return resp;
      });
    // var student = new Student(studObj);
    // student
    //   .save()
    //   .then((resp) => {
    //     // console.log(resp);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // {
    //   sheetNo: sheetNo,
    //   rowNo: rowNo,
    //   className: className,
    //   data: reportData,
    // }
    // console.log(`sheet ${sheetNo}`, `row ${rowNo}`, "==", className, reportData);
    alls.push(studObj);
    return { status: "succes", data: {} };
  };
  const convertExcelToJson = async (path) => {
    // const allClassesData = excelToJson({
    //   sourceFile: path,
    // });
    let properties = [1, 2, 3];
    //  Object.keys(allClassesData);
    properties.map((className, index) => {
      allClassesData[className].map((reportData, count) => {
        saveDataInDb(index, count, className, reportData);
      });
    });

    // const dataSaved = await saveDataInDb();

    return alls;
  };

  // module.exports = Students;
  let extraInfo = JSON.parse(req.body.extraInfo);
  let schoolCode = extraInfo.schoolCode;
  let schoolName = extraInfo.schoolName;
  let className = extraInfo.className;
  // console.log("yyyyyy", yearClass);
  // res.send(yearClass);
  // return;

  const createCollection = () => {
    console.log("");
    return;
    Student = mongoose.model(extraInfo.className, ReportSchema);
    let requestTime = Date.now();
    if (req.files === null) {
      return res.status(400);
    }
    const file = req.files.file[0];
    let fileName = `${requestTime}_${file.name}`;
    let filePath = `${__dirname}/uploads/${fileName}`;
    let fileExist = fs.existsSync(filePath);
    if (fileExist) {
      return res.status(200).send({
        message: "File already exist",
        ok: true,
        succes: false,
      });
    } else {
      file.mv(filePath, (err) => {
        if (err) {
          return res.status(200).send({
            error: err,
            message:
              "Could not save file, probably coul dnot find storage location",
            ok: true,
            succes: false,
          });
        }

        convertExcelToJson(filePath).then((resp) => {
          return res.status(201).send({
            data: { fileName: fileName, size: file.size, path: filePath },
            message: "File upload was succesfull",
            ok: true,
            succes: true,
            storedInDatabase: resp,
          });
        });
      });
    }
  };
  let connectionUrl = `mongodb://localhost/${schoolCode}_${schoolName}`;
  let connected = mongoose.connect(connectionUrl);
  mongoose.Promise = global.Promise;
  connected.then(() => {
    const con = mongoose.createConnection(connectionUrl);
    con.on("open", () => {
      // console.log(extraInfo.className);
      mongoose.connection.db
        .listCollections({ name: className })
        .next((err, names) => {
          if (names) {
            res.send("Sorry this class has already been created");
            return;
          } else {
            createCollection(); // Student = mongoose.model(extraInfo.className, StudentSchema);
          }
        });
    });
  });

  // con.on("open", () => {
  //   con.db.listCollections().toArray((err, collections) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(collections);
  //   });
  // });

  // survey.save();

  // Student.create(req.body)
  //   .then((student) => {
  //     res.send(req.files.file.name);
  //   })
  //   .catch(next);
};

// Display detail page for a specific Genre.
exports.genre_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre detail: " + req.params.id);
};

// Display Genre create form on GET.
exports.genre_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create GET");
};
