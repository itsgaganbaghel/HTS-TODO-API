// import the model
const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async (req, res) => {
  try {
    //extract title and description from the body of request
    // const { title, description } = req.body;

    const data = await Todo.find();
    res.send(data);

    res.status(200).json({
      success: true,
      data: data,
      message: " This is your Whole Data",
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
    res.status(404).json({
      success: false,
      data: " Data is not  Available",
      message: err.message,
    });
  }
};
