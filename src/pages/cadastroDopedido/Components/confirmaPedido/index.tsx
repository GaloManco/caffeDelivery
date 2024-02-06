import { Minus, Plus, Trash } from 'phosphor-react'
import {
  StyleConfirmaPedido,
  StyleListaDeCaffeSelecionados,
  StyleListaDeProdutosComprados,
  StyleValorDoProduto,
} from './style'
import Coffee01 from '../../../../assets/Coffee01.svg'

export function ConfirmaPedido() {
  return (
    <StyleConfirmaPedido>
      <div>
        <ul>
          <StyleListaDeProdutosComprados>
            <StyleListaDeCaffeSelecionados>
              <img src={Coffee01} />
              <div>
                <header>Expresso Tradicional</header>
                <footer>
                  <strong>
                    <button>
                      <Minus size={14} weight="fill" />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus size={14} weight="fill" />
                    </button>
                  </strong>
                  <span>
                    <button>
                      <Trash size={16} />
                      <p>REMOVER</p>
                    </button>
                  </span>
                </footer>
              </div>
              <StyleValorDoProduto>R$ 9,00</StyleValorDoProduto>
            </StyleListaDeCaffeSelecionados>
          </StyleListaDeProdutosComprados>
        </ul>
      </div>
      <div>
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
      </div>
    </StyleConfirmaPedido>
  )
}
