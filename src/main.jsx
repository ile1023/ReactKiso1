import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import ThreadList from './ThreadList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <ThreadList />
  </StrictMode>,
)
