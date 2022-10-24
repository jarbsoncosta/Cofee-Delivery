import { ProductsContainer, ValueqQantity } from './styles'
import coffee from '../../../../assets/coffee/coffee.svg'
import { PlusCircle, ShoppingCart } from 'phosphor-react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { formatPrice } from '../../../../utils/formatPrice'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
import { Cart } from '../../../Cart'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: coffee,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 5,
    categories: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
    ],
  },
  {
    id: 2,
    name: 'Café com Leite',
    image: coffee,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 5,
    categories: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
  },
  {
    id: 3,
    name: 'Café com Leite',
    image: coffee,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 5,
    categories: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
  },
  {
    id: 4,
    name: 'Café com Leite',
    image: coffee,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 5,
    categories: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
  },
]
interface CartItemAmount {
  [key: number]: number
}
export function Products() {
  const { addProduct, cart } = useCart()
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
        {products.map((product) => {
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
