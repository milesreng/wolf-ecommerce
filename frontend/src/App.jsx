import React from 'react'
import { Header } from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { Footer } from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div className='h-screen justify-between flex flex-col bg-default-bg font-sans'>
      <Header />
      <main className='py-3'>
        <div>
          <HomeScreen />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App