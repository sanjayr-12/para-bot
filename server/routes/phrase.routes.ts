import express from "npm:express";
import { phraseText } from "../controller/phrase.controller.ts";

const router = express.Router();

router.post("/", phraseText);

export default router;
