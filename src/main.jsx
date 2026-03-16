import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import PasswordGenrater from './PasswordGenrater'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < PasswordGenrater />
  </StrictMode>  
)
