import React from 'react'
import ReactDOM from 'react-dom/client' 
import './styles.css'
import { AppCalender } from './AppCalender.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppCalender />
  </React.StrictMode>,
)
