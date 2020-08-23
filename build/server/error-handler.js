"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorHandler;

function errorHandler(err, req, res, next) {
  if (err) {
    res.status(500).send({
      statusCode: 500,
      error: err
    });
  }
}