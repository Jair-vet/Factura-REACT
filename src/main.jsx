import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { InvoiceApp } from './components/InvoiceApp.jsx'
import { FacturasProvider } from './context/FacturasProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FacturasProvider>
      <InvoiceApp />
    </FacturasProvider>
  </React.StrictMode>,
)
