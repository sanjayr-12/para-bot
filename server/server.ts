import express from "npm:express";
import phraseText from "./routes/phraseText.ts"

const app = express();

app.use("/api/phrase", phraseText);

app.listen(3000, () => {
  console.log("server started");
});
