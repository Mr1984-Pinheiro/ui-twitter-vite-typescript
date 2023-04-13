import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { Sidebar } from './components/Sidebar';
import { router } from './components/routes';
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
     <Sidebar />     
      <div className="content">
      <RouterProvider router={router} />             
      </div>
    </div>
  </React.StrictMode>,
)
