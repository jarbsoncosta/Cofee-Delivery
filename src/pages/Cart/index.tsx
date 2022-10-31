import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import {
  Address,
  Container,
  ContainerPayment,
  FormRequest,
  Items,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { formatPrice } from '../../utils/formatPrice'
import { Product, useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'

const newAddressProps = z.object({
  cep: z.string().min(1, '* Campo obrigatório'),
  road: z.string().min(1, '* Campo obrigatório'),
  district: z.string().min(1, '* Campo obrigatório'),
  number: z.string().min(1, '* Campo obrigatório'),
  city: z.string().min(1, '* Campo obrigatório'),
  uf: z.string().min(1, '* Campo obrigatório'),
  complement: z.string().optional(),
  payment: z.enum(['Cartão de crédito', 'Cartão de dédito', 'Dinheiro']),
})

export function Cart() {
  // const history = useNavigate()
  const { cart, removeProduct, updateProductAmount, finishCart } = useCart()

  function onBlurCep(e: any) {
    const { value } = e.target

    const cep = value?.replace(/[^0-9]/g, '')

    if (cep?.length !== 8) {
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('city', data.localidade)
        setValue('district', data.bairro)
        setValue('road', data.logradouro)
        setValue('uf', data.uf)

        setFocus('number')
      })
  }

  type SearchFormInputs = z.infer<typeof newAddressProps>

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(newAddressProps),
  })

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

  function handleCreateNewOrder(data: SearchFormInputs) {
    finishCart({
      cep: data.cep,
      road: data.road,
      district: data.district,
      number: data.number,
      city: data.city,
      uf: data.uf,
      complement: data.complement,
      payment: data.payment,
      items: cart,
    })
    reset()
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
                  {errors.cep?.message && (
                    <span style={{ fontSize: '0.875rem', color: 'red' }}>
                      {errors.cep?.message}
                    </span>
                  )}
                  <input
                    type="text"
                    disabled
                    {...register('road')}
                    placeholder="Rua"
                  />
                </div>
                <div className="group2">
                  <input
                    type="text"
                    {...register('number')}
                    placeholder="Número"
                  />
                  <input
                    type="text"
                    disabled
                    {...register('complement')}
                    placeholder="Complemento"
                  />
                </div>
                {errors.number?.message && (
                  <span style={{ fontSize: '0.875rem', color: 'red' }}>
                    {errors.number?.message}
                  </span>
                )}
                <div className="group3">
                  <input
                    type="text"
                    disabled
                    {...register('district')}
                    placeholder="Bairro"
                  />
                  <input
                    type="text"
                    disabled
                    {...register('city')}
                    placeholder="Cidade"
                  />
                  <input
                    disabled
                    type="text"
                    {...register('uf')}
                    placeholder="UF"
                  />
                </div>
              </Address>
            </div>

            <Controller
              control={control}
              name="payment"
              render={({ field }) => {
                return (
                  <ContainerPayment>
                    <span>
                      <CurrencyDollar size={18} /> Pagamento
                    </span>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                    <TransactionType
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <TransactionTypeButton
                        {...register('payment')}
                        value="Cartão de crédito"
                      >
                        <CreditCard size={18} /> CARTÃO DE CRÉDITO
                      </TransactionTypeButton>

                      <TransactionTypeButton
                        {...register('payment')}
                        value="Cartão de dédito"
                      >
                        <Bank size={18} />
                        CARTÃO DE DÉBITO
                      </TransactionTypeButton>
                      <TransactionTypeButton
                        {...register('payment')}
                        value="Dinheiro"
                      >
                        <Money size={18} />
                        DINHEIRO
                      </TransactionTypeButton>
                    </TransactionType>
                  </ContainerPayment>
                )
              }}
            />
          </FormRequest>
          <div className="items">
            <h3>Complete seu pedido</h3>
            <Items>
              {cart.map((item) => {
                return (
                  <>
                    <div key={item.id} className="cart">
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
                            <div className="btn-amount">
                              <FiMinus
                                role="button"
                                onClick={() => handleProductDecrement(item)}
                                size={16}
                              />
                            </div>
                            <span>{item.amount}</span>
                            <div className="btn-amount">
                              <FiPlus
                                role="button"
                                onClick={() => handleProductIncrement(item)}
                                size={16}
                              />
                            </div>
                          </div>
                          <button
                            type="button"
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
              <button type="submit" className="btnSubmit">
                CONFIRMAR PEDIDO
              </button>
            </Items>
          </div>
        </form>
      ) : (
        <h3>Seu carrinho está vazio</h3>
      )}
    </Container>
  )
}
