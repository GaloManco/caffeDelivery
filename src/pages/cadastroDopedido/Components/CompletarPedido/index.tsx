import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { StyleCompletarPedido } from './style'

export function CompletarPedido() {
  return (
    <>
      <StyleCompletarPedido>
        <h2>Complete seu pedido</h2>
        <div>
          <header>
            <h2>
              <MapPinLine /> Endereço de Entrega
            </h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </header>
          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="numero" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </div>
        <footer>
          <header>
            <h2>
              <CurrencyDollar /> Pagamento
            </h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </header>
          <section>
            <ul>
              <li>
                <CreditCard /> CARTÃO DE CRÉDITO
              </li>
              <li>
                <Bank /> CARTÃO DE DÉBITO
              </li>
              <li>
                <Money /> DINHEIRO
              </li>
            </ul>
          </section>
        </footer>
      </StyleCompletarPedido>
    </>
  )
}
