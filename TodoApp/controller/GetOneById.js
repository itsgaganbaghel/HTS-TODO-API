const Todo = require("../models/Todo");

exports.getOneById = async (req, res) => {
  try {
    let id = req.params.id;
    let item = await Todo.findById({ _id: id });
    if (item) {
      res.status(200).json({
        success: true,
        data: item,
        message: " Item is successfully Find ",
      });
    } else {
      res.send("item with the given id does not exist");
    }
  } catch (err) {
    console.log(err);
    console.log(err.message);
    res.status(404).json({
      success: false,
      data: " not found",
      message: err.message,
    });
  }
};
