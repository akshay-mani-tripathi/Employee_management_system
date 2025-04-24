import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { GetLocalStorage, UpdateEmployeesLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  

  const submitHandler = (e) => {
    e.preventDefault();
  
    if (!taskTitle || !taskDate || !assignTo || !category || !taskDescription) {
      alert('Please fill all fields');
      return;
    }
  
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };
  
    const { employees } = GetLocalStorage();
  
    const employeeIndex = employees.findIndex(emp => emp.name === assignTo);
  
    if (employeeIndex === -1) {
      alert('Employee not found');
      return;
    }
  
    const employee = employees[employeeIndex];
  
    if (!employee.tasks) {
      employee.tasks = [];
    }
  
    // Add new task to the employee's task list
    employee.tasks.push(newTask);
  
    // Update task stats
    employee.taskStats.newTask += 1;  // Increment the 'newTask' count
    employee.taskStats.active += 1;    // Increment the 'active' count (assuming it’s a new task)
  
    // Update in localStorage
    employees[employeeIndex] = employee;
    UpdateEmployeesLocalStorage(employees);
  
    // Clear form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  
    alert('Task successfully created!');
  };
  

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text" placeholder="Make a UI design" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text" placeholder="Employee name" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text" placeholder="Design, Dev, etc" />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Task description"></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
