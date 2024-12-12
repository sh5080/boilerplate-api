import express from "express";
import helmet from "helmet";
import cors from "cors";
import controllers from "./controllers/index.js";

const app = express();

// 미들웨어
app.use(
  cors({
    origin: ["http://localhost:3000", "https://dev.nuworks.io"],
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));

controllers.forEach((controller) => {
  app.use(controller.pathName, controller.router);
});

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(8000, () => {
  console.log("서버가 시작되었습니다.");
});
