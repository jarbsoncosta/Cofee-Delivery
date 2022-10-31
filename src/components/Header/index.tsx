import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import logoImg from '../../assets/logo.svg'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/" style={{ display: 'flex' }}>
        <img src={logoImg} alt="Logomarca" />
      </Link>
      <div className="address-cart">
        <div className="address">
          <MapPin size={20} weight="fill" />
          <p>Natal, RN </p>
        </div>
        <Link to="/carrinho" className="cart">
          <ShoppingCart size={25} weight="fill" />
        </Link>
        <span>{cart.length} </span>
      </div>
    </HeaderContainer>
  )
}
