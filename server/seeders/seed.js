const db = require("../config/connection");
const { User, Property } = require("../models");
const userSeeds = require("./userSeeds.json");
const propertySeeds = require("./propertySeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Property.deleteMany({});
    await User.create(userSeeds);
    await Property.create(propertySeeds);

    console.log("data is seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
