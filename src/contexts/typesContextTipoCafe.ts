import { ReactNode } from 'react'
import { DadosCafe } from './dados'

// Tipagem do childre da função provider
export interface TypeChildren {
  children: ReactNode
}
// Tipagem dos State dadosCafe
interface TipoCafeType {
  sabor01?: string
  sabor02?: string
  sabor03?: string
}
// Continua...
interface DadoCafetype {
  id: string
  nome: string
  descricao: string
  preco: number
  imagem: string
  tipoDeCafer: TipoCafeType[]
}

export interface PayloadType {
  idCafe: string
  qtd: number
  preco: number
  nome: string
  imagem: string
  descricao: string
}
// Tipagem do objeto state da função reducer
export interface StateType {
  dadosCafe: DadoCafetype[]
  carrinhoDeCompras: PayloadType[]
}
export type Action =
  | { type: 'CARRINHO_DE_COMPRAS'; payload: PayloadType[] }
  | {
      type: 'DIMINUIR_PRODUTO'
      payload: string
    }
  | {
      type: 'ADD_PRODUTO'
      payload: string
    }
  | { type: 'REMOVER'; payload: string }
  | { type: 'LimparCarrinho' }

// Typagem do contexte tem o nome das propriedade são enviadas pelo provider
export interface ContextoType {
  state: StateType
  dispatch: React.Dispatch<Action>
}

// Tipagem do inicialState do hook reducer
export const inicialState = {
  dadosCafe: DadosCafe,
  carrinhoDeCompras: [],
}
