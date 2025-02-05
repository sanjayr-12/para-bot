import model from "../gemini/config.ts";
import { Request, Response } from "npm:express";

export const phraseText = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    return res.status(200).json({ data: result.response.text() });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ error: "Internal server error: " + error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};