import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import BlogDetail from "../pages/BlogDetail";

export default function Navigator() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={'/blog/:id'} element={<BlogDetail/>}/>
    </Routes>
  )
}
