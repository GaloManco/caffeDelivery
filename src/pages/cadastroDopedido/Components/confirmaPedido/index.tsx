import { StyleConfirmaPedido } from './style'

import { ListaDevalores } from './components/listadevalores'
import { ListaDeCafe } from './components/listadecafe'

export function ConfirmaPedido({ handleSubmit }: any) {
  return (
    <StyleConfirmaPedido>
      <ListaDeCafe />

      <ListaDevalores handleSubmit={handleSubmit} />
    </StyleConfirmaPedido>
  )
}
