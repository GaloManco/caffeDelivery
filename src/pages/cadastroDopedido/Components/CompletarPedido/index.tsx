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
type addEnderecoType = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}
export function CompletarPedido({ register }: any) {
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
          <StyleFormularioCompletarPedido action="#">
            <StyleImputCompletarPedido1
              {...register('cep')}
              type="text"
              placeholder="CEP"
            />
            <StyleImputCompletarPedido2
              {...register('rua')}
              type="text"
              placeholder="Rua"
            />
            <div>
              <StyleImputCompletarPedido3
                {...register('numero')}
                type="text"
                placeholder="Número"
              />

              <StyleImputCompletarPedido4
                {...register('complementos')}
                type="text"
                placeholder="Complemento ( opcional )"
              />
            </div>
            <div>
              <StyleImputCompletarPedido5
                {...register('bairro')}
                type="text"
                placeholder="Bairro"
              />
              <StyleImputCompletarPedido6
                {...register('cidade')}
                type="text"
                placeholder="Cidade"
              />
              <StyleImputCompletarPedido7
                {...register('uf')}
                type="text"
                placeholder="UF"
              />
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
