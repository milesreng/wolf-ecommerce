import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <div className='h-screen justify-between flex flex-col bg-default-bg font-sans'>
      <Header />
      <main className='py-3 flex flex-col h-full'>
        <div className='self-start'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App