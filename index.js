const mongo = require("./mongo");
const connectToMongoDb = async () => {
  await mongo().then((mongoose) => {
    try {
      console.log("Connected to mongodb");
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  });
};
connectToMongoDb();
