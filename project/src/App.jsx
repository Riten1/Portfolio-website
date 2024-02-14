import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { useEffect } from 'react'

function App() {
const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  })

  return (
    <>
     <Header />
     <main>
      <Outlet />
     </main>
     <Footer /> 
    </>
  )
}

export default App
