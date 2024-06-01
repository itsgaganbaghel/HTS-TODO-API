const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await Todo.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          UpdateAt: Date.now(),
        },
      }
    );

    res.status(200).json({
      success: true,
      message: " Data is successfully updated",
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(404).json({
      success: false,
      data: " error occur while updating",
      message: error.message,
    });
  }
};
