import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { StyleCard, StyleInforCafe, StyleInforCard } from './style'
import { StyleShoppeCard } from '../../../../components/header/components/boxIcons/style'
import { useContext, useState } from 'react'
import { TipoCafeContext } from '../../../../contexts/contextTipoCafe'

interface SaborDoCafeType {
  sabor01?: string
  sabor02?: string
  sabor03?: string
}
interface TypeTipoCafeState {
  id: string
  nome: string
  descricao: string
  preco: number
  imagem: string

  tipoDeCafer?: SaborDoCafeType[] | undefined
  // addNoCarrinho: PayloadType
}

export function Card({
  id,
  nome,
  descricao,
  imagem,
  preco,
  tipoDeCafer,
}: TypeTipoCafeState) {
  const [qtdCafe, setQtdCafe] = useState(0)
  const { state, dispatch } = useContext(TipoCafeContext)

  function handleAddNoCarrinho() {
    if (qtdCafe > 0) {
      const dados = {
        idCafe: id,
        qtd: qtdCafe,
        preco: qtdCafe * preco,
        nome,
        descricao,
        imagem,
      }
      const carrinhoAtual = state.carrinhoDeCompras
      const novoCarrinho = [...carrinhoAtual, dados]
      dispatch({ type: 'CARRINHO_DE_COMPRAS', payload: novoCarrinho })
      setQtdCafe(0)
    }
  }

  function handleDiminuirProduto() {
    if (qtdCafe > 0) {
      setQtdCafe(qtdCafe - 1)
    }
  }

  return (
    <StyleCard>
      <img src={imagem} alt="" />
      <StyleInforCard>
        <h2>
          {/* ingrediente do cafe */}
          <ul>
            {tipoDeCafer?.map((sabores) =>
              Object.values(sabores).map((sabor) => (
                <li key={sabor}>
                  <p>{sabor}</p>
                </li>
              )),
            )}
          </ul>
        </h2>

        <StyleInforCafe>
          {/* Nome do cafe */}
          <h1>{nome}</h1>
          {/* Descrição do cafe */}
          <p>{descricao}</p>
          <footer>
            {/* Valor do cafe */}
            <h1>R${preco.toFixed(2).replace('.', ',')}</h1>
            <div>
              <span>
                <button onClick={handleDiminuirProduto}>
                  <Minus size={14} />
                </button>
                <p>{qtdCafe}</p>
                <button onClick={() => setQtdCafe(qtdCafe + 1)}>
                  <Plus size={14} />
                </button>
              </span>
              <button onClick={handleAddNoCarrinho}>
                <StyleShoppeCard
                  corDofundo={'purpleDark'}
                  corDoIcons={'base_card'}
                  corDeFundoHover={'purple'}
                  corDeIconsHover={'base_card'}
                >
                  <ShoppingCart weight="fill" size={14} />
                </StyleShoppeCard>
              </button>
            </div>
          </footer>
        </StyleInforCafe>
      </StyleInforCard>
    </StyleCard>
  )
}
