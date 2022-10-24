import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/home'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartProductProvider } from './hooks/useCart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProductProvider>
          <Router />
        </CartProductProvider>
        <ToastContainer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
