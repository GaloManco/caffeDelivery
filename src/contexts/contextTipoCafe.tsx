import { createContext, useReducer } from 'react'
import {
  Action,
  ContextoType,
  StateType,
  TypeChildren,
  inicialState,
} from './typesContextTipoCafe'

export const TipoCafeContext = createContext({} as ContextoType)

export function TiposCafeProvider({ children }: TypeChildren) {
  function reducer(state: StateType, action: Action) {
    switch (action.type) {
      case 'CARRINHO_DE_COMPRAS':
        return {
          ...state,
          carrinhoDeCompras: action.payload,
        }
      case 'DIMINUIR_PRODUTO':
        return {
          ...state,
          carrinhoDeCompras: state.carrinhoDeCompras.map((item) => {
            if (item.idCafe === action.payload) {
              if (item.qtd > 0) {
                const novoQtd = item.qtd - 1

                return { ...item, qtd: novoQtd }
              }
            }

            return item
          }),
        }
      case 'ADD_PRODUTO':
        return {
          ...state,
          carrinhoDeCompras: state.carrinhoDeCompras.map((item) => {
            if (item.idCafe === action.payload) {
              const novoQtd = item.qtd + 1
              return { ...item, qtd: novoQtd }
            }
            return item
          }),
        }
      case 'REMOVER':
        return {
          ...state,
          carrinhoDeCompras: state.carrinhoDeCompras.filter(
            (dados) => dados.idCafe !== action.payload,
          ),
        }
      case 'LimparCarrinho':
        return {
          ...state,
          carrinhoDeCompras: [],
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, inicialState)

  return (
    <TipoCafeContext.Provider value={{ state, dispatch }}>
      {children}
    </TipoCafeContext.Provider>
  )
}
