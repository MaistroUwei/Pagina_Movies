import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Trending, Home, Top10, Login, Movie } from '../pages'

export const MovieRoutes = () => {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element ={<Home />} />
    <Route path='/trending' element ={<Trending />} />
    <Route path='/top10' element ={<Top10 />} />
    <Route path='/login' element ={<Login />} />
    <Route path='/movie/:movieId/:language' element ={<Movie />} />
    </Routes>     
    </>
  )
}
