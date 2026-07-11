const mongoose = require("mongoose");
const initdb = require("./data.js"); // Imported as 'initdb'
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(async () => {
    console.log("connected to db");
    await initDB(); // <--- You must CALL the function here!
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Use 'initdb' to match your require statement above
  const updatedData = initdb.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("6a23a66db19a2be6472018d4"),
  }));

  await Listing.insertMany(updatedData);
  console.log("Data was initialized");
};
