import Task from "../models/Task.js";
export const getAllTasks = async (req, res) => {
  try {
    const { filter = "all" } = req.query;
    let startDate = null;
    const now = new Date();

    switch (filter) {
      case "today":
        // Lấy từ 00:00 hôm nay
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0
        );
        break;

      case "week":
        // Lấy từ thứ 2 đầu tuần
        const mondayDate =
          now.getDate() - (now.getDay() - 1) - (now.getDay() === 0 ? 7 : 0);
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          mondayDate,
          0,
          0,
          0
        );
        break;

      case "month":
        // Lấy từ ngày 1 của tháng
        startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
        break;

      case "all":
      default:
        // Không filter theo ngày, lấy tất cả
        startDate = null;
        break;
    }

    const query = startDate ? { createdAt: { $gte: startDate } } : {};

    const result = await Task.aggregate([
      {
        $facet: {
          tasks: [{ $match: query }, { $sort: { createdAt: -1 } }],
          activeCount: [
            { $match: { ...query, status: "active" } },
            { $count: "count" },
          ],
          completeCount: [
            { $match: { ...query, status: "complete" } },
            { $count: "count" },
          ],
        },
      },
    ]);

    const tasks = result[0].tasks;
    const activeCount = result[0].activeCount[0]?.count || 0;
    const completeCount = result[0].completeCount[0]?.count || 0;
    res.status(200).json({ tasks, activeCount, completeCount });
  } catch (error) {
    console.error("Lỗi khi gọi getAllTasks", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Lỗi khi gọi createTasks", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id, // ✔ đúng
      {
        title,
        status,
        completedAt, // ✔ đúng chính tả
      },
      { new: true, runValidators: true } // ✔ update trả về bản mới
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Nhiệm vụ không tồn tại" });
    }

    res.status(200).json(updatedTask); // ✔ đúng biến
  } catch (error) {
    console.error("Lỗi khi gọi updateTasks", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    if (!deleteTask) {
      return res.status(404).json({ message: "Nhiem vu khong ton tai" });
    }

    res.status(200).json(deleteTask);
  } catch (error) {
    console.error("Lỗi khi gọi deleteTask", error);
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};
