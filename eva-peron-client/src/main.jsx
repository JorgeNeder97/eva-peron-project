import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './MainApp'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css/normalize.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>,
)
