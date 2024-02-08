import { Minus, Plus, Trash } from 'phosphor-react'
import Coffee01 from '../../../../../../assets/Coffee01.svg'
import { StyleConteinerUL, StyleValorTotal } from './styles'

export function ListaDeCafe() {
  return (
    <StyleConteinerUL>
      <li>
        <img src={Coffee01} />
        <div>
          <h5>Expresso Tradicional</h5>
          <div>
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
          </div>
        </div>
        <StyleValorTotal>R$ 9,00</StyleValorTotal>
      </li>
      <li>
        <img src={Coffee01} />
        <div>
          <h5>Expresso Tradicional</h5>
          <div>
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
          </div>
        </div>
        <StyleValorTotal>R$ 9,00</StyleValorTotal>
      </li>
    </StyleConteinerUL>
  )
}
