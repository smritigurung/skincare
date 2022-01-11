import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
