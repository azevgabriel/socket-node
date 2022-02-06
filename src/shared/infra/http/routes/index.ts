import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

export {router};