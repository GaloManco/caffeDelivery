import { StyleConfirmaPedido } from './style'

import { ListaDevalores } from './components/listadevalores'
import { ListaDeCafe } from './components/listadecafe'

export function ConfirmaPedido() {
  return (
    <StyleConfirmaPedido>
      <ListaDeCafe />
      <ListaDevalores />
    </StyleConfirmaPedido>
  )
}
