const { ProductModel } = require("../models/Product");
const { asyncHandler } = require("../middleware/async");
const { ErrorResponse } = require("../utils/errorResponse");

module.exports = {
  //get all products
  getAllProducts: asyncHandler(async (req, res, next) => {
    const products = await ProductModel.find();
    res.status(200).json({ success: true, data: products });
  }),
  //get single product
  getProductById: asyncHandler(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 400));
    }
    res.status(200).json({ success: true, data: product });
  }),
  //create product
  createProduct: asyncHandler(async (req, res, next) => {
    if (!name || !price || !description || !category) {
      return next(new ErrorResponse("Please provide name, price, description and category", 400));
    }
    const product = await ProductModel.create(req.body);
    res.status(201).json({ success: true, data: product });
  }),

  //update product
  updateProduct: asyncHandler(async (req, res, next) => {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 400));
    }
    res.status(200).json({ success: true, data: product });
  }),
  //delete product
  deleteProduct: asyncHandler(async (req, res, next) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 400));
    }
    res.status(200).json({ success: true, data: {} });
  }),
};
