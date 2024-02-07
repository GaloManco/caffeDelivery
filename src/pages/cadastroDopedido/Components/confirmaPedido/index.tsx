import { Minus, Plus, Trash } from 'phosphor-react'
import {
  StyleConfirmaPedido,
  StyleListaDeCaffeSelecionados,
  StyleListaDeProdutosComprados,
  StyleValorDoProduto,
} from './style'
import Coffee01 from '../../../../assets/Coffee01.svg'
import { ListaDevalores } from './components/listadevalores'

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
      <ListaDevalores />

    </StyleConfirmaPedido>
  )
}
