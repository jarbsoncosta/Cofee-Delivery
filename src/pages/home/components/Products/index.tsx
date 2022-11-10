import { ProductsContainer, ValueqQantity } from './styles'
import coffee from '../../../../assets/coffee/coffee.svg'
import { PlusCircle, ShoppingCart } from 'phosphor-react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { formatPrice } from '../../../../utils/formatPrice'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
import { Cart } from '../../../Cart'
import { Link } from 'react-router-dom'

interface CartItemAmount {
  [key: number]: number
}
export function Products() {
  const { addProduct, cart, productsArray } = useCart()
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemAmount)

  function handleAddProduct(id: number) {
    addProduct(id)
  }
  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <div className="cards">
        {productsArray.map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={coffee} alt="" />
              <div className="categories">
                {product.categories.map((c) => {
                  return <p key={c.id}>{c.name} </p>
                })}
              </div>
              <strong>{product.name} </strong>
              <span>{product.description}</span>
              <ValueqQantity>
                <div className="price">
                  <strong>{formatPrice(product.price)} </strong>
                </div>
                <div className="amount-button-cart">
                  <div className="amount">
                    <Link to="/carrinho" title="Ir para o carrinho">
                      <ShoppingCart size={25} />
                    </Link>
                    <span>{cartItemsAmount[product.id] || 0}</span>
                  </div>
                  <div className="buttonCart">
                    <PlusCircle
                      onClick={() => handleAddProduct(product.id)}
                      size={25}
                      weight="fill"
                    />
                  </div>
                </div>
              </ValueqQantity>
            </div>
          )
        })}
      </div>
    </ProductsContainer>
  )
}
