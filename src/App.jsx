import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import './App.css'
import { AuthContext } from './context/AuthProvider'
import { SetLocalStorage, GetLocalStorage } from './utils/localStorage'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  const authData = userData

  useEffect(() => {
    // Initialize localStorage if not already set
    if (!localStorage.getItem('employees')) {
      SetLocalStorage()
    }

    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    let employees = []

    try {
      const rawEmployees = GetLocalStorage().employees
      employees = typeof rawEmployees === "string" ? JSON.parse(rawEmployees) : rawEmployees || []
    } catch (error) {
      console.error("Failed to parse employees:", error)
    }

    const employeeMatch = employees.find(
      (e) => e.email === email && String(e.password) === String(password)
    )

    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      if (employeeMatch) {
        setUser('employee')
        setLoggedInUserData(employeeMatch)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employeeMatch }))
      } else {
        alert('Invalid credentials')
      }
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
      {!user ? <Login handlelogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        user === 'employee' ? (
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        ) : null
      )}
    </>
  )
}

export default App
