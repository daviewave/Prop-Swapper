const { Schema, model } = require("mongoose");

const propertySchema = new Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zip: {
    type: INT,
    required: true,
    trim: true,
  },
  bedrooms: {
    type: INT,
    required: true,
    trim: true,
  },
});

const Property = model("Property", propertySchema);

module.exports = Property;
