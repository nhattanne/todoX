import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const TaskEmptyState = ({ filter ="all" }) => {
  return (
    <Card
      className="p-8 text-center border-0 bg-gradient-card shadow-custom-md"
      // padding 8 căn giữa text bỏ boder,thêm màu nền gradient card, đổ bóng cuttom medium
    >
      <div className="space-y-3">
        {/* giúp phần tử cách nhau 12px theo chiều dọc */}
        <Circle className="size-12 mx-auto text-muted-foreground" />
      </div>
      <h3 className="font-medium text-foreground">
        {filter === "active"
          ? "Không có nhiệm vụ nào đang làm."
          : filter === "completed"
          ? "Chưa có nhiệm vụ nào hoàn thành."
          : "Chưa có nhiệm vụ."}
      </h3>
      <p className="text-sm text-muted-foreground">
        {filter === "all"
          ? "Thêm nhiện vụ đầu tiên vào để bắt đầu!"
          : `Chuyển sang "tất cả " để thấy những nhiệm vụ ${
              filter === "active" ? "đã hoàn thành" : "đang làm."
            }`}
      </p>
    </Card>
  );
};

export default TaskEmptyState;
