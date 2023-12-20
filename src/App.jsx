import { Suspense, lazy, useState } from 'react'
import './App.css'
import First from './Pages/First/First'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Homepage = lazy(() => import("./Pages/HomePage/Homepage"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1></h1>} >
          <Routes>
            <Route path='/' element={<First />} />
            <Route path='/home' element={<Homepage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
