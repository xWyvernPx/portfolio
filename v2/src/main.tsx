import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routers/routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot >
      <RouterProvider  router={router}/>
    </RecoilRoot>
  </React.StrictMode>,
)
