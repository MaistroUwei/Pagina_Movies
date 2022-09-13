import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate();
  const handleLogin= () => {
    navigate('/')
  }

  return (
    <div className='containter mt-5'>
      <button 
        onClick={handleLogin}
        className='btn btn-info'>        
        Login
      </button>
    </div>
  )
}
