import { StyleContador, StyleHeader } from './style'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { StyleShoppeCard } from './components/boxIcons/style'
import { useContext, useEffect, useState } from 'react'
import { TipoCafeContext } from '../../contexts/contextTipoCafe'

export function Header() {
  const [totalDeProdutos, setTotalDeProdutos] = useState(0)
  const { state } = useContext(TipoCafeContext)
  useEffect(() => {
    if (state.carrinhoDeCompras) {
      const total = state.carrinhoDeCompras.reduce(
        (valorInicial, qtd) => valorInicial + qtd.qtd,
        0,
      )

      setTotalDeProdutos(total)
    } else {
      setTotalDeProdutos(0)
    }
  }, [state.carrinhoDeCompras])

  const comItems = totalDeProdutos > 0 && '/cadastrodopedido'

  return (
    <StyleHeader>
      <NavLink to="/" title="home">
        <img src={Logo} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin size={17} weight="fill" />
          <p>Porto Alegre,RS</p>
        </span>
        <StyleShoppeCard
          corDoIcons={'yellowDark'}
          corDofundo={'yellow_light'}
          corDeFundoHover={'yellow'}
          corDeIconsHover={'base_card'}
        >
          <NavLink to={comItems} title="Cadastro de pedito">
            <ShoppingCart size={25} weight="fill" />
          </NavLink>
        </StyleShoppeCard>
        {totalDeProdutos > 0 && (
          <StyleContador>{totalDeProdutos}</StyleContador>
        )}
      </div>
    </StyleHeader>
  )
}
