import express from "npm:express";
import { testGen } from "../controller/phrase.controller.ts";

const router = express.Router();

router.post("/", testGen);

export default router;
