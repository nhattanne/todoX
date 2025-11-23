import React from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'

const AddTask = () => {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
            type="text"
            placeholder="Cần phải làm gì?"
            className="h-12 text-base bg-slate-50 sm:flex-1 boder-boder/50 focus:boder-primary/50 focus:ring-primary " 
            //boder-boder/50 tạo viền với trong suốt 50%
            //focus:boder-primary/50 để khi bấm vào viền màu tím với độ trong suốt 50%
            // ring-primary là lớp vòng bao bọc boder   

            />
          </div>
          
          </Card>
)
}

export default AddTask
