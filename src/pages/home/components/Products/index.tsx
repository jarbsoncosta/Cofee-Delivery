import { ProductsContainer, ValueqQantity } from './styles'
import coffee from '../../../../assets/coffee/coffee.svg'
import { ShoppingCart } from 'phosphor-react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { formatPrice } from '../../../../utils/formatPrice'
import { useCart } from '../../../../hooks/useCart'

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

export function Products() {
  const { addProduct } = useCart()
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
                    <FiMinus size={16} />
                    <span>{1}</span>
                    <FiPlus size={16} />
                  </div>
                  <div className="buttonCart">
                    <ShoppingCart
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
