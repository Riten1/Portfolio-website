import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'
import { useEffect } from 'react'
import Footer from './components/Footer/Footer'

function App() {
const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

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
