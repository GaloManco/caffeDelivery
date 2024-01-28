import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import caffe01 from '../../../../assets/Coffee01.svg'
import { StyleCard, StyleInforCafe, StyleInforCard } from './style'
import { StyleShoppeCard } from '../../../../components/header/components/boxIcons/style'

export function Card() {
  return (
    <StyleCard>
      <img src={caffe01} alt="" />
      <StyleInforCard>
        <h2>
          <ul>
            <li>
              <p>TRADICIONAL</p>
            </li>
            <li>
              <p>QUENTE</p>
            </li>

            <li>
              <p>COM LEITE</p>
            </li>
            {/* <li>
              <p>ESPECIAL</p>
            </li> */}
            {/* <li>
              <p>ALCOÓLICO</p>
            </li> */}
            {/* <li>
              <p>GELEADO</p>
            </li> */}
          </ul>
        </h2>

        <StyleInforCafe>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <footer>
            <h1>R$9,00</h1>
            <div>
              <span>
                <button>
                  <Minus size={14} />
                </button>
                1
                <button>
                  <Plus size={14} />
                </button>
              </span>
              <button>
                <StyleShoppeCard
                  corDofundo={'purpleDark'}
                  corDoIcons={'base_card'}
                  corDeFundoHover={'purple'}
                  corDeIconsHover={'base_card'}
                >
                  <ShoppingCart weight="fill" size={14} />
                </StyleShoppeCard>
              </button>
            </div>
          </footer>
        </StyleInforCafe>
      </StyleInforCard>
    </StyleCard>
  )
}
