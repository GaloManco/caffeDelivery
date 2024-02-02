import { CompletarPedido } from './Components/CompletarPedido'
import { ConfirmaPedido } from './Components/confirmaPedido'

import { StyleMain } from './style'

export function CadastroDoPedido() {
  return (
    <StyleMain>
      <CompletarPedido />
      <ConfirmaPedido />
    </StyleMain>
  )
}
