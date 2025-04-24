import React, { useState } from 'react'

const Login = ({handlelogin}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        handlelogin(email,password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} 
                    required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} 
                    required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
                    <button className='text-white outline-none border-none    w-[100%]        bg-emerald-600     text-xl py-3 px-5 mt-5 rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login