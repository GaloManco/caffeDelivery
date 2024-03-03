import { useContext } from 'react'
import { Card } from '../card'
import { StyleListaDeItens } from './style'
import { TipoCafeContext } from '../../../../contexts/contextTipoCafe'
export function ListaDeItens() {
  const { state } = useContext(TipoCafeContext)

  return (
    <StyleListaDeItens>
      <ul>
        {state.dadosCafe.map((e) => (
          <li key={e.id}>
            <Card
              id={e.id}
              nome={e.nome}
              descricao={e.descricao}
              imagem={e.imagem}
              preco={e.preco}
              tipoDeCafer={e.tipoDeCafer}
            />
          </li>
        ))}
      </ul>
    </StyleListaDeItens>
  )
}
