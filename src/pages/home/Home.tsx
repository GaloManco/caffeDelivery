import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imagemCafe from '../../assets/ImagemCafe.svg'
import {
  StyleCoffee,
  StyleConteinerBolinhas,
  StyleImgInfor,
  StyleItens,
  StylePackage,
  StyleShoppingCart,
  StyleTimer,
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
          <StyleConteinerBolinhas>
            <p>
              <StyleShoppingCart>
                <ShoppingCart size={13} weight="fill" />
              </StyleShoppingCart>
              Compra simples e segura
            </p>
            <p>
              <StyleTimer>
                <Timer size={13} weight="fill" />
              </StyleTimer>
              Entrega rápida e rastreada
            </p>
          </StyleConteinerBolinhas>
          <StyleConteinerBolinhas>
            <p>
              <StylePackage>
                <Package size={13} weight="fill" />
              </StylePackage>
              Embalagem mantém o café intacto
            </p>
            <p>
              <StyleCoffee>
                <Coffee size={13} weight="fill" />
              </StyleCoffee>
              O café chega fresquinho até você
            </p>
          </StyleConteinerBolinhas>
        </StyleItens>
      </StyledContainerItem>
      <StyleImgInfor>
        <img src={imagemCafe} alt="" />
      </StyleImgInfor>
    </StyledConteinerInfor>
  )
}
