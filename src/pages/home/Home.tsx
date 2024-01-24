import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imagemCafe from '../../assets/ImagemCafe.svg'
import {
  StyleImgInfor,
  StyleItens,
  StyledContainerItem,
  StyledConteinerInfor,
  StyledInfor,
} from './style'
export function Home() {
  return (
    <StyledConteinerInfor>
      <StyledContainerItem>
        <StyledInfor>
          <h1>Encotre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o caffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </StyledInfor>
        <StyleItens>
          <strong>
            <p>
              <ShoppingCart weight="fill" />
              Compra simples e segura
              <Timer weight="fill" />
              Entrega rápida e rastreada
            </p>
          </strong>
          <span>
            <p>
              <Package weight="fill" />
              Embalagem mantém o café intacto
              <Coffee weight="fill" />O café chega fresquinho até você
            </p>
          </span>
        </StyleItens>
      </StyledContainerItem>
      <StyleImgInfor>
        <img src={imagemCafe} alt="" />
      </StyleImgInfor>
    </StyledConteinerInfor>
  )
}
