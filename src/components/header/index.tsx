import { StyleHeader } from './style'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

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
        <strong>
          <NavLink to="/cadastrodopedido" title="Cadastro de pedito">
            <ShoppingCart size={18} weight="fill" />
          </NavLink>
        </strong>
      </div>
    </StyleHeader>
  )
}
