import AddTask from '@/components/AddTask'
import DatTimeFilter from '@/components/DatTimeFilter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StatsAndFilters from '@/components/StatsAndFilters'
import TaskList from '@/components/TaskList'
import TaskListPagination from '@/components/TaskListPagination'
import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">

          {/* Header */}
          <Header />

          {/* Create Task */}
          <AddTask />

          {/* Stats & Filters */}
          <StatsAndFilters />

          {/* Task List */}
          <TaskList />

          {/* Pagination & Date Filter */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DatTimeFilter />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
