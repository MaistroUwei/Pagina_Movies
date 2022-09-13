import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Trending, Home, Top10, Login } from '../pages'
import { MovieRoutes } from './MovieRoutes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/*' element={<MovieRoutes />}/>
    </Routes>
  )
}
