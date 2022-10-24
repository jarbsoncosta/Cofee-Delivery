import {
  Address,
  Container,
  Content,
  Img,
  InfoContent,
  Payment,
  TimeDelivery,
} from './styles'
import deliveryImg from '../../assets/img-delivery.svg'
import { MapPin, Timer } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export function OrderSummary() {
  const { finish } = useCart()

  return (
    <Container>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </section>
      <Content>
        <InfoContent>
          <Address>
            <div>
              <MapPin size={20} weight="fill" />
            </div>
            <div>
              <p>
                Entrega em {''}
                <strong>
                  {finish.road}, {finish.number}
                </strong>
              </p>
              <p>
                {finish.district} - {finish.city}, {finish.uf}
              </p>
            </div>
          </Address>
          <TimeDelivery>
            <div>
              <Timer size={20} weight="bold" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </TimeDelivery>
          <Payment>
            <div>
              <Timer size={20} weight="bold" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{finish.payment}</strong>
            </div>
          </Payment>
        </InfoContent>
        <Img>
          <img src={deliveryImg} alt="" />
        </Img>
      </Content>
    </Container>
  )
}
