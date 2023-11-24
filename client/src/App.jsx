import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Iletisim from './pages/Iletisim/Iletisim';

function App() {

  return (
    <Router>
  
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/iletisim" element={<Iletisim/>} />

    </Routes>
</Router>
  )
}

export default App
