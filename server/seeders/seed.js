const db = require("../config/connection");
const { User, Property } = require("../models");
const userSeeds = require("./userSeeds.json");
const propertySeeds = require("./propertySeeds.json");

db.once("open", async () => {
  try {
    //delete database to start fresh
    await User.deleteMany({});
    await Property.deleteMany({});

    //create our users and property
    const users = await User.insertMany(userSeeds);
    const properties = await Property.insertMany(propertySeeds);

    for (newUser of users) {
      const tempProperty =
        properties[Math.floor(Math.random() * properties.length)];
      newUser.property = tempProperty._id;

      await newUser.save();

      tempProperty.user = newUser._id;
      await tempProperty.save();
    }

    console.log("Data is seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
