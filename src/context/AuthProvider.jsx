import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    SetLocalStorage()
    const data = GetLocalStorage()
    setUserData(data)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
