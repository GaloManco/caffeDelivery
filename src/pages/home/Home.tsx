import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imagemCafe2 from '../../assets/ImagemCafe2.png'

import {
  StyleCoffee,
  StyleContainer,
  StyleConteinerBolinhas,
  StyleConteinerList,
  StyleImgInfor,
  StyleItens,
  StylePackage,
  StyleShoppingCart,
  StyleTimer,
  StyledContainerItem,
  StyledConteinerInfor,
  StyledInfor,
} from './style'
import { ListaDeItens } from './components/listaDeItens'

export function Home() {
  return (
    <StyleContainer>
      <StyledConteinerInfor>
        <StyledContainerItem>
          <StyledInfor>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o caffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
          <img src={imagemCafe2} alt="" />
        </StyleImgInfor>
      </StyledConteinerInfor>
      <StyleConteinerList>
        <div>Nossos Cafés</div>
        <main>
          <ListaDeItens />
        </main>
      </StyleConteinerList>
    </StyleContainer>
  )
}
