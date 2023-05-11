"use strict";

module.exports.hello = async (event) = {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serveless v.2.0! Your fuction executed sucessfully!",
        input: event,
      },
      null,
      2
    ),
 }
};