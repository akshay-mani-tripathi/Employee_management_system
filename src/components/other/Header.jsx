import React, { useEffect, useState } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!(props.data)) {
      setUsername('Admin')
    } else {
      setUsername(props.data.name)
    }
  }, [props.data]) // ✅ run only when `data` changes


  const logoutuser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div className='text-amber-50 flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username}</span>
      </h1>
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
      onClick={logoutuser}
      >
        Log out
      </button>
    </div>
  )
}

export default Header
