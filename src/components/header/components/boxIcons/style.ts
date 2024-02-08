import styled from 'styled-components'

const COR_DOS_ICONS = {
  base_card: 'base_card',
  yellowDark: 'yellow_dark',
}
const COR_DE_FUNDO = {
  purpleDark: 'purple_dark',
  yellow_light: 'yellow_light',
}
const COR_DE_FUNDO_HOVER = {
  purple: 'purple',
  yellow_light: 'yellow_light',
  yellow: 'yellow',
}

interface StatusProps {
  corDoIcons: keyof typeof COR_DOS_ICONS
  corDofundo: keyof typeof COR_DE_FUNDO
  corDeFundoHover: keyof typeof COR_DE_FUNDO_HOVER
  corDeIconsHover: keyof typeof COR_DOS_ICONS
}

export const StyleShoppeCard = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;

  /* background: ${(props) => props.theme.yellow_light}; */
  background: ${(props) => props.theme[COR_DE_FUNDO[props.corDofundo]]};

  &:hover {
    background: ${(props) =>
      props.theme[COR_DE_FUNDO_HOVER[props.corDeFundoHover]]};
  }
  &:hover svg {
    color: ${(props) => props.theme[COR_DOS_ICONS[props.corDeIconsHover]]};
  }

  width: 2.37rem;
  height: 2.37rem;
  padding-top: 0.187rem;
  svg {
    color: ${(props) => props.theme[COR_DOS_ICONS[props.corDoIcons]]};
    /* color: ${(props) => props.theme.yellow_dark}; */
  }
`
