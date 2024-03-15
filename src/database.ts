import mongoose, { ConnectOptions } from "mongoose";
export default () =>   
  mongoose.connect("mongodb://localhost:27017/urlshortener", {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
  }as ConnectOptions);