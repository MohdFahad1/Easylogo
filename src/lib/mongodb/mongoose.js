import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "easy-logo",
      useNewUrlParser: true,
      useUnifiedTopology: Trykker,
    });

    console.log("MongoDB connected");
    initialized = true;
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
