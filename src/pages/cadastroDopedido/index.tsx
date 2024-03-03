import { useForm } from 'react-hook-form'
import { ContextCompletarPedito } from '../../contexts/contextoCompletarPedido/contextCompletarPedido'
import { CompletarPedido } from './Components/CompletarPedido'
import { ConfirmaPedido } from './Components/confirmaPedido'

import { StyleMain } from './style'
import { useContext } from 'react'

export function CadastroDoPedido() {
  const { setEndereco } = useContext(ContextCompletarPedito)

  const { register, handleSubmit, reset } = useForm()

  type addEnderecoType = {
    cep: string
    rua: string
    numero: string
    complementos: string
    bairro: string
    cidade: string
    uf: string
  }

  function addEndereco(data: addEnderecoType) {
    const dados = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complementos,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
    }
    setEndereco(dados)

    reset()
  }

  return (
    <StyleMain>
      <CompletarPedido register={register} />
      <ConfirmaPedido handleSubmit={handleSubmit(addEndereco)} />
    </StyleMain>
  )
}
