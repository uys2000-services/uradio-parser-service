import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRequest from "../api/post";

const app = express();
const port = 3000;

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", postRequest);

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
