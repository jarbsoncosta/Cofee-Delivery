import { BannerContainer } from './styles'
import imgBanner from '../../../../assets/img-banner.svg'

export function Banner() {
  return (
    <BannerContainer>
      <div className="title">
        <ul>
          <li>Encontre o café perfeito</li>
          <li> para qualquer hora do dia</li>
        </ul>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
      </div>
      <div className="divImg">
        <img src={imgBanner} alt="" />
      </div>

      <div className="icons"></div>
    </BannerContainer>
  )
}
