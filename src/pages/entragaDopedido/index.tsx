import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  StyleConteinerInformacaoDaEntrega,
  StyleConteinerPedidoConfirmado,
  StyleExibirEndrecoDeEntrega,
  StyleExibirPrevisãoDeEntrega,
  StyleExibirTipoDePagamento,
  StyleFooterEntregaDoPedido,
  StyleHeaderEntregaDopedido,
  StyleImagemMotinhaEntregando,
} from './style'
import motinhaEntregando from '../../assets/motinha-entregando.svg'
export function EntregaDoPedido() {
  return (
    <StyleConteinerPedidoConfirmado>
      <StyleHeaderEntregaDopedido>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </StyleHeaderEntregaDopedido>
      <StyleConteinerInformacaoDaEntrega>
        <StyleFooterEntregaDoPedido>
          <section>
            <StyleExibirEndrecoDeEntrega>
              <span>
                <MapPin weight="fill" size={16} />
              </span>
              <div>
                <p>
                  Entrega em<strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </StyleExibirEndrecoDeEntrega>
            <StyleExibirPrevisãoDeEntrega>
              <span>
                <Timer weight="fill" size={16} />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </StyleExibirPrevisãoDeEntrega>
            <StyleExibirTipoDePagamento>
              <span>
                <CurrencyDollar width="fill" size={16} />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </StyleExibirTipoDePagamento>
          </section>
        </StyleFooterEntregaDoPedido>
        <StyleImagemMotinhaEntregando src={motinhaEntregando} alt="" />
      </StyleConteinerInformacaoDaEntrega>
    </StyleConteinerPedidoConfirmado>
  )
}
