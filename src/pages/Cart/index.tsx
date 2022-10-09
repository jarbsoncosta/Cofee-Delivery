import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useState } from 'react'
import { Address, Container, FormRequest, Items, Payment } from './styles'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { formatPrice } from '../../utils/formatPrice'
import { Product, useCart } from '../../hooks/useCart'

interface AddressProps {
  cep: string
  road: string
  district: string
  number: string
  complement?: string
  city: string
  uf: string
}
const validatePartner = yup.object({
  cep: yup.string().required('Campo obrigatório'),
  road: yup.string().required('Campo obrigatório'),
  district: yup.string().required('Campo obrigatório'),
  number: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  uf: yup.string().required('Campo obrigatório'),
})

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart()
  const [payment, setPayment] = useState('')
  const [address, setAddress] = useState({})

  function onBlurCep(e: any) {
    const { value } = e.target

    const cep = value?.replace(/[^0-9]/g, '')

    if (cep?.length !== 8) {
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setValue('city', data.localidade)
        setValue('district', data.bairro)
        setValue('road', data.logradouro)
        setValue('uf', data.uf)

        setFocus('number')
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm<AddressProps>({ resolver: yupResolver(validatePartner) })

  function handleProductIncrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1,
    }
    updateProductAmount(IncrementArguments)
  }

  function handleProductDecrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1,
    }
    updateProductAmount(IncrementArguments)
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }
  const subTotal = cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount

    return sumTotal
  }, 0)

  const total = cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount

    return sumTotal
  }, 0)

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <FormRequest>
            <div>
              <h3>Complete seu pedido</h3>
              <Address>
                <span>
                  <MapPinLine size={18} /> Endereço de Entrega
                </span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
                <div className="group1">
                  <input
                    type="text"
                    {...register('cep')}
                    onBlur={onBlurCep}
                    placeholder="CEP"
                  />
                  <input type="text" {...register('road')} placeholder="Rua" />
                </div>
                <div className="group2">
                  <input
                    type="text"
                    {...register('number')}
                    placeholder="Número"
                  />
                  <input
                    type="text"
                    {...register('complement')}
                    placeholder="Complemento"
                  />
                </div>
                <div className="group3">
                  <input
                    type="text"
                    {...register('district')}
                    placeholder="Bairro"
                  />
                  <input
                    type="text"
                    {...register('city')}
                    placeholder="Cidade"
                  />
                  <input type="text" {...register('uf')} placeholder="UF" />
                </div>
              </Address>
            </div>
            <Payment>
              <div>
                <span>
                  <CurrencyDollar size={18} weight="fill" />
                  Pagamento
                </span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
                <div className="btn-payment">
                  <label htmlFor="credit">
                    <input
                      type="radio"
                      id="credit"
                      name="payment"
                      onClick={() => setPayment('CARTÃO DE CRÉDITO')}
                    />
                    <CreditCard size={15} weight="fill" /> CARTÃO DE CRÉDITO
                  </label>
                  <label htmlFor="debito">
                    <input
                      type="radio"
                      id="debito"
                      name="payment"
                      onClick={() => setPayment('CARTÃO DE DÉBITO')}
                    />
                    <Bank size={15} weight="fill" />
                    CARTÃO DE DÉBITO
                  </label>
                  <label htmlFor="money">
                    <input
                      type="radio"
                      id="money"
                      name="payment"
                      onClick={() => setPayment('DINHEIRO')}
                    />
                    <Money size={15} weight="fill" /> DINHEIRO
                  </label>
                </div>
              </div>
            </Payment>
          </FormRequest>
          <div className="items">
            <h3>Complete seu pedido</h3>
            <Items>
              {cart.map((item) => {
                return (
                  <>
                    <div className="cart">
                      <div className="divImg">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="divInfo">
                        <div className="title-price">
                          <p>{item.name} </p>
                          <strong>{formatPrice(item.price)}</strong>
                        </div>
                        <div className="amount-button-cart">
                          <div className="amount">
                            <button
                              className="btn-amount"
                              disabled={item.amount <= 1}
                              onClick={() => handleProductDecrement(item)}
                            >
                              <FiMinus size={16} />
                            </button>
                            <span>{item.amount}</span>
                            <button
                              className="btn-amount"
                              onClick={() => handleProductIncrement(item)}
                            >
                              <FiPlus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => handleRemoveProduct(item.id)}
                            className="buttonCart"
                          >
                            <Trash size={15} />
                            REMOVER
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
              <div className="orderSummary">
                <div className="tItems-delivery">
                  <p>Total de itens</p>
                  <p>{formatPrice(subTotal)} </p>
                </div>
                <div className="tItems-delivery">
                  <p>Entrega</p>
                  <p>{formatPrice(3.5)} </p>
                </div>
                <div className="total">
                  <strong>Total</strong>
                  <strong>{formatPrice(total + 3.5)} </strong>
                </div>
              </div>
              <button className="btnSubmit"> CONFIRMAR PEDIDO</button>
            </Items>
          </div>
        </>
      ) : (
        <h3>Seu carrinho está vazio</h3>
      )}
    </Container>
  )
}
