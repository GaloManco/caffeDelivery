import { ReactNode, createContext, useState } from 'react'

interface EndrecoClinteStateType {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

type ContextType = {
  endrecoClienteState: EndrecoClinteStateType | undefined
  setEndereco: (valor: EndrecoClinteStateType) => void
}

export const ContextCompletarPedito = createContext({} as ContextType)

// Context Função provaider -----------------------

interface ChildrenType {
  children: ReactNode
}
export function ContextCompletarPeditoProvider({ children }: ChildrenType) {
  const [endrecoClienteState, setEnderecoClienteState] =
    useState<EndrecoClinteStateType>()

  function setEndereco(valor: EndrecoClinteStateType) {
    setEnderecoClienteState(valor)
  }

  return (
    <ContextCompletarPedito.Provider
      value={{ endrecoClienteState, setEndereco }}
    >
      {children}
    </ContextCompletarPedito.Provider>
  )
}
