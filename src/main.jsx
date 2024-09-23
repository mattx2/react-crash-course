import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ROOT_DIR_ALIAS } from 'next/dist/lib/constants'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
