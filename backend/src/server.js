import express from "express";
import taskRoute from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT //nếu như .env kh có PORT thì sẽ dùng giá trị mặc định 5001


app.use(express.json());

app.use("/api/tasks", taskRoute);

connectDB().then(() => {
  
app.listen(PORT, () => {
  console.log(`Server dang bat dau tren cong ${PORT}`);
});
});


