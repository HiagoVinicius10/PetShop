import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import CartProvite from "./contexts/CartContext.tsx"
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <CartProvite>
<Toaster
  position="bottom-center"
  reverseOrder={false}
/>
    <App />
  </CartProvite>
  </StrictMode>,
)
