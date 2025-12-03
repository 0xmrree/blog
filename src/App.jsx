import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import EthereumSimulator from './articles/EthereumSimulator'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/ethereum-simulator" element={<EthereumSimulator />} />
      </Routes>
    </Router>
  )
}

export default App
