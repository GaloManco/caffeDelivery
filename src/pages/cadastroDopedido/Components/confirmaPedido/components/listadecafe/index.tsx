import { Minus, Plus, Trash } from 'phosphor-react'

import { StyleConteinerUL, StyleValorTotal } from './styles'
import { useContext } from 'react'
import { TipoCafeContext } from '../../../../../../contexts/contextTipoCafe'

export function ListaDeCafe() {
  const { state, dispatch } = useContext(TipoCafeContext)

  return (
    <StyleConteinerUL>
      {state.carrinhoDeCompras.map((e) => (
        <li key={e.idCafe}>
          <img src={e.imagem} />
          <div>
            <h5>{e.nome}</h5>
            <div>
              <strong>
                <button>
                  <Minus
                    size={14}
                    weight="fill"
                    onClick={() =>
                      dispatch({ type: 'DIMINUIR_PRODUTO', payload: e.idCafe })
                    }
                  />
                </button>
                <p>{e.qtd}</p>
                <button>
                  <Plus
                    size={14}
                    weight="fill"
                    onClick={() =>
                      dispatch({ type: 'ADD_PRODUTO', payload: e.idCafe })
                    }
                  />
                </button>
              </strong>
              <span>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVER', payload: e.idCafe })
                  }
                >
                  <Trash size={16} />
                  <p>REMOVER</p>
                </button>
              </span>
            </div>
          </div>
          <StyleValorTotal>
            R$ {(e.preco * e.qtd).toFixed(2).replace('.', ',')}
          </StyleValorTotal>
        </li>
      ))}
    </StyleConteinerUL>
  )
}
