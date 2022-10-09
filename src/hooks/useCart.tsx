import { createContext, ReactNode, useContext, useState } from 'react'
import coffee from '../assets/coffee/coffee.svg'

interface CartProviderProps {
  children: ReactNode
}

export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  amount: number
  quantity: number
  categories: [
    {
      id: number
      name: string
    },
  ]
}
interface UpdateProductAmount {
  productId: number
  amount: number
}
interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}
const productsArray = [
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

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProductProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@Coffe:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })

  const addProduct = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(
        (product: Product) => product.id === productId,
      )
      if (!productAlreadyInCart) {
        const stock = productsArray.find((product) => product.id === productId)
        console.log(stock)

        setCart([...cart, { ...stock, amount: 1 }])
        localStorage.setItem(
          '@Coffe:cart',
          JSON.stringify([...cart, { ...stock, amount: 1 }]),
        )
        alert('Adicionado')
        return
      }
      if (productAlreadyInCart) {
        const stock = productsArray.find((product) => product.id === productId)

        if (stock.quantity > productAlreadyInCart.amount) {
          const updatedCart = cart.map((cartItem: Product) =>
            cartItem.id === productId
              ? {
                  ...cartItem,
                  amount: Number(cartItem.amount) + 1,
                }
              : cartItem,
          )

          setCart(updatedCart)
          localStorage.setItem('@Coffe:cart', JSON.stringify(updatedCart))
          alert('Mais uma unidade desse produto foi adicionado')
          return
        } else {
          alert('Quantidade solicitada fora de estoque')
        }
      }
    } catch {
      alert('Erro na adição do produto')
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(
        (cartProduct: Product) => cartProduct.id === productId,
      )
      if (!productExists) {
        alert('Erro na remoção do produto')
        return
      }

      const updatedCart = cart.filter(
        (cartItem: Product) => cartItem.id !== productId,
      )
      setCart(updatedCart)
      localStorage.setItem('@Coffe:cart', JSON.stringify(updatedCart))
    } catch {
      alert('Erro na remoção do produto')
    }
  }

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount < 1) {
        alert('Erro na alteração de quantidade do produto')
        return
      }

      const response = productsArray.find((product) => product.id === productId)
      const productAmount = response.quantity
      const stockIsFree = amount > productAmount

      if (stockIsFree) {
        alert('Quantidade solicitada fora de estoque')
        return
      }

      const productExists = cart.some(
        (cartProduct: Product) => cartProduct.id === productId,
      )
      if (!productExists) {
        alert('Erro na alteração de quantidade do produto')
        return
      }

      const updatedCart = cart.map((cartItem: Product) =>
        cartItem.id === productId
          ? {
              ...cartItem,
              amount,
            }
          : cartItem,
      )
      setCart(updatedCart)
      localStorage.setItem('@Coffe:cart', JSON.stringify(updatedCart))
    } catch {
      alert('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ addProduct, removeProduct, updateProductAmount, cart }}
    >
      {children}
    </CartContext.Provider>
  )
}
export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
