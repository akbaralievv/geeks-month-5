
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import PhotoPage from './pages/photoPage/PhotoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path='photos/:id' element={<PhotoPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
