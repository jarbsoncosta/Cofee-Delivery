import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logomarca" />
      <div className="address-cart">
        <div className="address">
          <MapPin size={20} weight="fill" />
          <p>Natal-RN</p>
        </div>
        <div className="cart">
          <ShoppingCart size={20} weight="fill" />
        </div>
      </div>
    </HeaderContainer>
  )
}
