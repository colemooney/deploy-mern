const mongoose = require("mongoose");
const Quote = mongoose.model("quotes");

module.exports = (app) => {
  app.get(`/${id}/get`, async (req, res) => {
    try {
        console.log("edit page");
      const id = req.params.id;
      const quotes = await Quote.findById({id});
      return res.send(quotes);
    } catch (error) {
      return res.send(error);
    }
  });

  app.post(`/${id}/post`, async (req, res) => {
    try {
      const id = req.params.id;
      Quote.findById({id})
      const quotePosted = new Quote({
        quote: req.body.quote,
        author: req.body.author,
      });
      await quotePosted.save();
      console.log("posting a new quote:", quotePosted);
      return res.send(quotePosted);
    } catch (error) {
      console.log("hey there's an err", error);
      return res.send(error);
    }
  });
};
