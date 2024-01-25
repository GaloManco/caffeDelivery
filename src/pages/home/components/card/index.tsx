import { ShoppingCart } from 'phosphor-react'
import caffe01 from '../../../../assets/Coffee01.svg'
import { StyleCard, StyleInforCard } from './style'

export function Card() {
  return (
    <StyleCard>
      <img src={caffe01} alt="" />
      <StyleInforCard>
        <h2>TRADICIONAL</h2>
        <span>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <footer>
            <h1>R$9,00</h1>
            <span>- 1 +</span>
            <div>
              <ShoppingCart />
            </div>
          </footer>
        </span>
      </StyleInforCard>
    </StyleCard>
  )
}
