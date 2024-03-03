import { NavLink } from 'react-router-dom'
import {
  StyleButtonConfirmaPedido,
  StyleConteinerListaDeValores,
  StyleConteinerTotalDoValor,
} from './styles'
import { useContext } from 'react'
import { TipoCafeContext } from '../../../../../../contexts/contextTipoCafe'

export function ListaDevalores({ handleSubmit }: any) {
  const { dispatch, state } = useContext(TipoCafeContext)

  function addEndereco() {
    handleSubmit()
    dispatch({ type: 'LimparCarrinho' })
  }
  const valorTotalCompras = state.carrinhoDeCompras.reduce((total, item) => {
    const preco = item.preco * item.qtd

    return total + preco
  }, 0)
  const valorEntrega = 3.5
  const total = valorTotalCompras + valorEntrega

  return (
    <StyleConteinerListaDeValores>
      {valorTotalCompras > 0 && (
        <div>
          <p>Total de itens</p>
          <span>R$ {valorTotalCompras.toFixed(2).replace('.', ',')}</span>
        </div>
      )}
      {valorTotalCompras > 0 && (
        <div>
          <p>Entrega</p>
          <span>R$ {valorEntrega.toFixed(2).replace('.', '.')}</span>
        </div>
      )}
      {valorTotalCompras > 0 ? (
        <StyleConteinerTotalDoValor>
          <p>Total</p>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </StyleConteinerTotalDoValor>
      ) : (
        <StyleConteinerTotalDoValor>
          <p>Total</p>
          <span>R$ 0,00</span>
        </StyleConteinerTotalDoValor>
      )}
      <NavLink to="/entregadopedido" title="Confirma Pedido">
        <StyleButtonConfirmaPedido
          onClick={addEndereco}
          disabled={valorTotalCompras === 0}
        >
          Confirmar Pedido
        </StyleButtonConfirmaPedido>
      </NavLink>
    </StyleConteinerListaDeValores>
  )
}
