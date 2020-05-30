const { Router } = require("express");
const HomePage = require("../models").homepage;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allHomepages = await HomePage.findAll();
    res.status(200).json(allHomepages);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
