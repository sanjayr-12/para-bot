import express from "npm:express";
import phraseText from "./routes/phrase.routes.ts";
import dotenv from "npm:dotenv";

const app = express();
app.use(express.json());

dotenv.configDotenv();

app.use("/api/phrase", phraseText);

app.listen(Deno.env.get("PORT"), () => {
  console.log("server started");
});
