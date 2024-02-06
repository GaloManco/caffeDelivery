import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  StyleCompletarPedido,
  StyleCotainerCompletarPedito,
  StyleFooterCompletarPedido,
  StyleFormularioCompletarPedido,
  StyleHeaderCompletarPedido,
  StyleHeaderCompletarPedido2,
  StyleImputCompletarPedido1,
  StyleImputCompletarPedido2,
  StyleImputCompletarPedido3,
  StyleImputCompletarPedido4,
  StyleImputCompletarPedido5,
  StyleImputCompletarPedido6,
  StyleImputCompletarPedido7,
} from './style'

export function CompletarPedido() {
  return (
    <StyleCotainerCompletarPedito>
      <h2>Complete seu pedido</h2>
      <StyleCompletarPedido>
        <div>
          <StyleHeaderCompletarPedido>
            <h2>
              <MapPinLine size={23} /> <p>Endereço de Entrega</p>
            </h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </StyleHeaderCompletarPedido>
          <StyleFormularioCompletarPedido action="">
            <StyleImputCompletarPedido1 type="text" placeholder="CEP" />
            <StyleImputCompletarPedido2 type="text" placeholder="Rua" />
            <div>
              <StyleImputCompletarPedido3 type="text" placeholder="Número" />

              <StyleImputCompletarPedido4
                type="text"
                placeholder="Complemento ( opcional )"
              />
            </div>
            <div>
              <StyleImputCompletarPedido5 type="text" placeholder="Bairro" />
              <StyleImputCompletarPedido6 type="text" placeholder="Cidade" />
              <StyleImputCompletarPedido7 type="text" placeholder="UF" />
            </div>
          </StyleFormularioCompletarPedido>
        </div>
      </StyleCompletarPedido>
      <StyleFooterCompletarPedido>
        <StyleHeaderCompletarPedido2>
          <h2>
            <CurrencyDollar size={22} weight="fill" /> <span>Pagamento</span>
          </h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </StyleHeaderCompletarPedido2>
        <section>
          <ul>
            <li>
              <button>
                <CreditCard size={22} weight="fill" /> CARTÃO DE CRÉDITO
              </button>
            </li>
            <li>
              <button>
                <Bank size={22} weight="fill" /> CARTÃO DE DÉBITO
              </button>
            </li>
            <li>
              <button>
                <Money size={22} weight="fill" /> DINHEIRO
              </button>
            </li>
          </ul>
        </section>
      </StyleFooterCompletarPedido>
    </StyleCotainerCompletarPedito>
  )
}
