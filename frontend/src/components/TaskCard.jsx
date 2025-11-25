import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle2, Circle, Calendar, Square, SquarePen, Trash2, Trash2Icon } from "lucide-react";

const TaskCard = ({ task, index }) => {
  let isEditting = false;
  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card border-0 shadow-custom-lg transition-all duration-200 animate-fade-in group",
        task.status === "complete" && "bg-gray-50"
        // group để các nút có thể hiển thị khi hover
      )}
      style={{ animationDelay: `${index * 50}ms` }}
      // phần tử xuất hiện theo thứ tự, tạo hiệu ứng “staggered” (lan tỏa) trong animation.
    >
      <div className="flex items-center gap-4">
        {/* nút tròn */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "flex-shrink-0 size-8 rounded-full transition-all duration-200",
            task.status == "complete"
              ? "text-success/80"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {task.status === "complete" ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>

        {/* Hiển thị hoặc chỉnh sửa tiêu đề */}
        <div className="flex-1 min-w-0">
          {isEditting ? (
            <Input
              placeholder="Cần phải làm gì?"
              className="flex-1 h-12 text-base border-border/50 focus:bor der-primary/50 focus:ring-primary/20"
              type="text"
            />
          ) : (
            <p
              className={cn(
                "text-base transition-all duration-200",
                task.status === "complete"
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              )}
            >
              {task.title}
            </p>
          )}


                  {/* Ngày tạo & ngày hoàn thành */}
        <div className="flex items-center gap-2 mt-1">
          <Calendar className="size-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {new Date(task.createdAt).toLocaleDateString()}
            {/* tolacaledatestring hàm theo giờ VN */}
          </span>
          {task.completedAt && (
            <>
              <span className="text-xs text-muted-foreground"> - </span>
              <Calendar className="size-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {new Date(task.completedAt).toLocaleTimeString()}
              </span>
            </>
          )}
        </div>
        </div>


        {/* Nút chỉnh và nút xóa */}

        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
        
        {/* Nút edit */}
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 transition-colors size-8 text-muted-foreground hover:text-info "
        
        >
          <SquarePen className="size-4"></SquarePen>

        </Button>

        {/* Nút xóa */}
        <Button
        variant="ghost"
          size="icon"
          className="shrink-0 transition-colors size-8 text-gray-600 hover:text-destructive hover:bg-red "
        
          >
            <Trash2 className="size-4 " strokeWidth={2.5}/>

        </Button>




        </div>






      </div>
    </Card>
  );
};

export default TaskCard;
