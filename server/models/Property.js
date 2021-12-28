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
    type: Number,
    required: true,
    trim: true,
  },
  bedrooms: {
    type: Number,
    required: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Property = model("Property", propertySchema);

module.exports = Property;
