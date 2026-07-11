const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { assert } = require("joi");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  // Update this section to match your sample data structure
  image: {
    url: String,
    filename: String,
  },

  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  category: {
    type: String,
    enum: [
      "mountains",
      "arctic",
      "room",
      "castles",
      "camping",
      "trending",
      "farm",
      "houseboat",
      "domes",
      "city",
    ],
  },
});

// middleware to delete review when listing was deleted

listingSchema.post("findOneDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
