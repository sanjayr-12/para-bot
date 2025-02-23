import { GoogleGenerativeAI } from "npm:@google/generative-ai";

const genAI = new GoogleGenerativeAI(Deno.env.get("GEM_API") || "");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: Deno.env.get("SYS_INS"),
});

export default model;
