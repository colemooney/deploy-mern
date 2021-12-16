const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get(`/user/get`, async (req, res) => {
    try {
      const users = await User.find({});
      return res.send(users);
    } catch (error) {
      return res.send(error);
    }
  });

  app.post(`/user/post`, async (req, res) => {
    try {
      const userPosted = new User({
        quote: req.body.userName,
        author: req.body.password,
        email: req.body.email,
      });
      await userPosted.save();
      console.log("posting a new quote:", userPosted);
      return res.send(userPosted);
    } catch (error) {
      console.log("hey there's an err", error);
      return res.send(error);
    }
  });
};
