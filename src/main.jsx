import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './QrCode.css'
// import App from './App.jsx'
// import { QrCode } from "./QrCode.jsx"
import { RegFrm } from './formsamples/RegFrm.jsx'
// import { UserCard } from './UserCard.jsx'
import { AdviceApp } from './adviceApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <UserCard /> */}
    {/* <QrCode /> */}
    {/* <RegFrm /> */}
    { <AdviceApp />}
  </StrictMode> 
)
