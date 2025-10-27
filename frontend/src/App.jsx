import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
    <div className='min-h-screen bg-base-200'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </div>
    
  )
}

export default App