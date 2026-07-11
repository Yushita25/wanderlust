const Listing = require("../models/listing.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const User = require("../models/user.js");
module.exports.index = async (req, res) => {
  const { category, location } = req.query;
  console.log(req.query);
  let allListings;
  if (location) {
    allListings = await Listing.find({
      location: { $regex: location, $options: "i" },
    });

    if (allListings.length === 0) {
      req.flash("error", "No listing is available for this location");
      return res.redirect("/listings");
    }
  } else if (category) {
    allListings = await Listing.find({ category });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index", { allListings });
};
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.addToWishlist = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(req.user._id).populate("wishlist");

  if (!user.wishlist.includes(id)) {
    user.wishlist.push(id);
    await user.save();
  }

  res.json({ success: true });
};

module.exports.showFavourite = async (req, res) => {
  const user = await User.findById(req.user._id).populate("wishlist");

  res.render("listings/fav.ejs", {
    allListings: user.wishlist,
  });
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("owner")
    .populate("reviews")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    });

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  // let result = listingSchema.validate(req.body);
  // console.log(result);

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New lisitng Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  let originalUrl = listing.image.url;
  // originalUrl = originalUrl.replace("/upload", "/upload/h_300,w_300 ");
  res.render("listings/Edit.ejs", { listing, originalUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true },
  );
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
