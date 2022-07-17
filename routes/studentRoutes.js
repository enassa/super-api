// const Student = require("../models/StudentModules");
const StudentSchema = require("../models/StudentModules");
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
// var xlsx = require("node-xlsx").default;
// GET SURVEYS
// CONNECT TO MONGOOSE
// let connection = mongoose.connect("mongodb://localhost/student");
// module.exports = conection;
// mongoose.Promise = global.Promise;
// getConnection().then((res) => {
//   console.log(mongoose.res?.db);
// });
router.get("/students/:id", (req, res, next) => {
  console.log("hello");
  res.send({ type: "GET" });
});

const alls = [];

// const createCollection = (collectionName) => {
//   const Students = mongoose.model("students", StudentSchema);
//   return Students;
// };
const saveDataInDb = (sheetNo, rowNo, className, studentData) => {
  if (rowNo === 0) return {};
  const studObj = {
    Name: studentData["A"],
    Unique_Id: studentData["F"],
    Gender: studentData["D"],
    JHS_No: studentData["C"],
    First_Name: studentData["A"],
    Surname: studentData["A"],
    Other_Names: studentData["A"],
    Email: null,
    DOB: null,
    BECE_Inde: studentData["F"],
    Programme: className,
    Class: studentData["H"],
    Residential_Status: studentData["E"],
    Guardians_Contact: null,
    Whatsapp: null,
    Call_Contact: null,
    WASSCE_Index: null,
    Track: studentData["G"],
    Region: null,
    City: null,
    Area: null,
    House: null,
    Guardians_Name: null,
    Guardians_Email: null,
    Guardians_Profession: null,
    image: null,
  };
  var student = new Student(studObj);
  student
    .save()
    .then((resp) => {
      // console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
  // {
  //   sheetNo: sheetNo,
  //   rowNo: rowNo,
  //   className: className,
  //   data: studentData,
  // }
  // console.log(`sheet ${sheetNo}`, `row ${rowNo}`, "==", className, studentData);
  alls.push(studObj);

  return { status: "succes", data: {} };
};
const convertExcelToJson = async (path) => {
  const allClassesData = excelToJson({
    sourceFile: path,
  });
  let properties = Object.keys(allClassesData);
  properties.map((className, index) => {
    allClassesData[className].map((studentData, count) => {
      const a = saveDataInDb(index, count, className, studentData);
    });
  });

  // const dataSaved = await saveDataInDb();

  return alls;
};
// ADD SURVEY
router.post("/students", (req, res, next) => {
  // module.exports = Students;
  let extraInfo = JSON.parse(req.body.extraInfo);
  let school = extraInfo.schoolCode;
  let className = extraInfo.className;
  // console.log("yyyyyy", yearClass);
  // res.send(yearClass);
  // return;

  const con = mongoose.createConnection(`mongodb://localhost/student`);
  con.on("open", () => {
    console.log(extraInfo.className);
    mongoose.connection.db
      .listCollections({ name: className })
      .next((err, names) => {
        if (names) {
          res.send("Sorry this class has already been created");
          return;
        } else {
          res.send("Sorry this class has already been created");
          // Student = mongoose.model(extraInfo.className, StudentSchema);
        }
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
  Student = mongoose.model(extraInfo.className, StudentSchema);

  let requestTime = Date.now();
  if (req.files === null) {
    return res.status(400);
  }
  const file = req.files.file;
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
        return res.status(500).send({
          error: err,
          message: "File exist already",
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

  // survey.save();

  // Student.create(req.body)
  //   .then((student) => {
  //     res.send(req.files.file.name);
  //   })
  //   .catch(next);
});

// UPDATE SURVEY
router.put("/students/:id", (req, res, next) => {
  res.send({ type: "PUT" });
});

// DELETE SURVEY
router.delete("/students/:id", (req, res, next) => {
  Student.findByIdAndRemove();
  res.send({ type: "DELETE" });
});
module.exports = router;
