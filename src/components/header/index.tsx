import { StyleContador, StyleHeader } from './style'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { StyleShoppeCard } from './components/boxIcons/style'

export function Header() {
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
        <StyleShoppeCard corDoIcons={'yellowDark'} corDofundo={'yellow_light'}>
          <NavLink to="/cadastrodopedido" title="Cadastro de pedito">
            <ShoppingCart size={16} weight="fill" />
          </NavLink>
        </StyleShoppeCard>
        <StyleContador>3</StyleContador>
      </div>
    </StyleHeader>
  )
}
