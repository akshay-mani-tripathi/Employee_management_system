import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [UserData, setUserData] = useContext(AuthContext);

  if (!UserData) {
    return <div className="text-white p-5">Loading tasks...</div>;
  }

  const employees = UserData.employees || [];

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {employees.map((emp, idx) => {
          const newTasks = emp.taskStats?.newTask || 0;
          const activeTasks = emp.taskStats?.active || 0;
          const completedTasks = emp.taskStats?.completed || 0;
          const failedTasks = emp.taskStats?.failed || 0;

          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between"
            >
              <h2 className="text-lg font-medium w-1/5 text-white">
                {emp.name}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {newTasks}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-600">
                {activeTasks}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {completedTasks}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {failedTasks}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
