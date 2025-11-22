import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      // type → kiểu dữ liệu (String, Number, Boolean, v.v.)
      // required → bắt buộc phải có giá trị (nếu thiếu sẽ báo lỗi khi .save())
      // trim → tự động loại bỏ khoảng trắng đầu và cuối chuỗi
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",

      // status chỉ chấp nhận 2 trạng thái là active và complete
      // default tức là nếu không truyền gì vào thì mặc định là active
    },
    completedAt: {
      type: Date,
      default: null,
      // completedAt là ngày giờ hoàn thành
      // defalt:null nghĩa là giá trị trống và khi status là complete thì mới set giá trị cho nó
    },
  },
  {
    timestamps: true,
    // Tự động thêm createdAt và updatedAt vào document
  }
);

export const Task = mongoose.model("Task", taskSchema);
export default Task;
