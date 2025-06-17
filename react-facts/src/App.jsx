import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './index.css'
import Main from './main.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
      <Main />
  </StrictMode>,
)
