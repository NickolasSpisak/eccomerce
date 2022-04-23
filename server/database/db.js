const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://spish:q77sTsNQJWjAWrm@cluster0.ukowe.mongodb.net/candles?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
