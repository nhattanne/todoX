import express from "express";
import taskRoute from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
dotenv.config();
const PORT = process.env.PORT; //nếu như .env kh có PORT thì sẽ dùng giá trị mặc định 5001

const __dirname = path.resolve();
const app = express();

// middlewares
app.use(express.json());


if(process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));

}

app.use("/api/tasks", taskRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // express.static là yêu cầu express lấy toàn bộ file tĩnh trong thư mục dist để gửi cho người dùng khi họ truy cập
  // path.join để nối đường dẫn đến thư mục hiện tại

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server dang bat dau tren cong ${PORT}`);
  });
});
