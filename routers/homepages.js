const { Router } = require("express");
const HomePage = require("../models").homepage;
const Story = require("../models").story; //Include story

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allHomepages = await HomePage.findAll();
    res.status(200).json(allHomepages);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const homepage = await HomePage.findByPk(id, { include: [Story] }); //Include story

    if (!homepage) {
      res.status(404).send("Homepage not found");
    } else {
      res.status(200).json(homepage);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
