import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import coffee from '../assets/coffee/coffee.svg'
import { toast } from 'react-toastify'

const productsArray = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: coffee,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
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
    price: 10.5,
    quantity: 3,
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
    name: 'Expresso Americano',
    image: coffee,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.99,
    quantity: 6,
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
    name: 'Expresso Cremoso',
    image: coffee,
    description: 'Café expresso tradicional com espuma cremosa',
    price: 15,
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
interface AddressPaymentProps {
  cep: string
  road: string
  district: string
  number: string
  city: string
  uf: string
  complement: string | undefined
  payment: 'Cartão de crédito' | 'Cartão de dédito' | 'Dinheiro'
  items: Product[]
  total: number
}
interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  finish: AddressPaymentProps
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
  finishCart: (items: AddressPaymentProps) => void
  productsArray: Product[]
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProductProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@Coffe:cart')
    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })

  useEffect(() => {
    setCart(cart)
  }, [cart])

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
        toast.success('Adicionado')
        return
      }
      if (productAlreadyInCart) {
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
        toast.success('Mais uma unidade desse produto foi adicionado')
        return
      }
    } catch {
      toast.success('Erro na adição do produto')
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(
        (cartProduct: Product) => cartProduct.id === productId,
      )
      if (!productExists) {
        toast.error('Erro na remoção do produto')
        return
      }

      const updatedCart = cart.filter(
        (cartItem: Product) => cartItem.id !== productId,
      )
      setCart(updatedCart)
      localStorage.setItem('@Coffe:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount < 1) {
        toast.error('Erro na alteração de quantidade do produto')
        return
      }

      const productExists = cart.some(
        (cartProduct: Product) => cartProduct.id === productId,
      )
      if (!productExists) {
        toast.error('Erro na alteração de quantidade do produto')
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
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  const [finish, setFinish] = useState(() => {
    const storagedCart = localStorage.getItem('@Coffe:finish')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })

  function finishCart(items: AddressPaymentProps) {
    setFinish({ ...items })
    toast.success('Pedido realizado com sucesso')
    localStorage.setItem('@Coffe:finish', JSON.stringify({ ...items }))
    localStorage.removeItem('@Coffe:cart')
    window.location.replace('/pedido')
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        updateProductAmount,
        cart,
        finishCart,
        finish,
        productsArray,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
