import { NavLink } from 'react-router-dom'
import {
  StyleButtonConfirmaPedido,
  StyleConteinerListaDeValores,
  StyleConteinerTotalDoValor,
} from './styles'

export function ListaDevalores() {
  return (
    <StyleConteinerListaDeValores>
      <div>
        <p>Total de itens</p>
        <span>R$ 20,70</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>
      <StyleConteinerTotalDoValor>
        <p>Total</p>
        <span>R$ 33,20</span>
      </StyleConteinerTotalDoValor>
      <NavLink to="/entregadopedido" title="Confirma Pedido">
        <StyleButtonConfirmaPedido>Confirmar Pedido</StyleButtonConfirmaPedido>
      </NavLink>
    </StyleConteinerListaDeValores>
  )
}
