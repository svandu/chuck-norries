import HomePage from './Components/HomePage'
import { Route, Routes } from 'react-router-dom'
import BoxContent from './Components/BoxContent'
import './App.css'

function App() {

  return (
    <>
      <HomePage />
      <Routes>
        <Route path='/categories' element={<BoxContent />}/>
      </Routes>
    </>
  )
}

export default App
