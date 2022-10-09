import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
      </Route>
    </Routes>
  )
}
