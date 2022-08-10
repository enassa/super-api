const mongoose = require("mongoose");
const { mongPath } = require("./constants");
// const password = "PdRuayEfXYBTsi7b";
// const mongPath = `mongodb+srv://enassan:${password}@koinovote.ww6hvut.mongodb.net/?retryWrites=true&w=majority`;
// password: PdRuayEfXYBTsi7b  PdRuayEfXYBTsi7b
// userName:enassan
module.exports = async () => {
  await mongoose.connect(mongPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};
