import { StyleConteinerListaDeValores } from './styles'

export function ListaDevalores() {
  return (
    <StyleConteinerListaDeValores>
      <div>
        <p>Total de itens</p>
        <p>R$ 20,70</p>
      </div>
      <div>
        <p>Entrega</p>
        <p>R$ 3,50</p>
      </div>
      <div>
        <p>Total</p>
        <p>R$ 33,20</p>
      </div>
      <button>Confirma Pedido</button>
    </StyleConteinerListaDeValores>
  )
}
