import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MainComponent() {
  return (
    <>
    <h2 className='text-5xl text-center text-indigo-600 mt-8'>React is great</h2>
  </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
    <MainComponent />
  </StrictMode>,
)
