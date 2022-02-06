import express from "express";
import { notesRoutes } from "./notes.routes";

const router = express();

router.use("/notes", notesRoutes);
router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

export {router};