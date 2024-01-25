import styled from 'styled-components'

export const StyleContainer = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90rem;
`

export const StyledConteinerInfor = styled.div`
  /* border: 1px solid; */

  display: flex;
  justify-content: center;

  width: 100%;
  height: 28rem;

  margin-top: 5.87rem;
`

export const StyledContainerItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;

  max-width: 36.75rem;
  height: 17.25rem;
  gap: 4.12rem;

  margin-right: 3.5rem;
`
export const StyledInfor = styled.div`
  /* border: 1px solid; */

  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 12rem;

  h1 {
    font-family: 'baloo 2';
    font-size: 3rem;
    display: flex;
    line-height: 1.2;
    color: ${(props) => props.theme.base_title};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const StyleItens = styled.div`
  /* border: 1px solid; */

  display: flex;
  width: 100%;
  height: 5.25rem;

  gap: 2.5rem;
`

export const StyleImgInfor = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  display: flex;
`

export const StyleConteinerBolinhas = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
    display: flex;
    gap: 0.75rem;
  }
`

const StyleBaseBolinha = styled.div`
  width: 2rem;
  height: 2rem;

  /* border: 1px solid; */
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.1rem;
  padding-top: 0.1rem;
  svg {
    color: ${(props) => props.theme.background};
  }
`
export const StyleShoppingCart = styled(StyleBaseBolinha)`
  background: ${(props) => props.theme.yellow_dark};
`
export const StyleTimer = styled(StyleBaseBolinha)`
  background: ${(props) => props.theme.yellow};
`
export const StylePackage = styled(StyleBaseBolinha)`
  background: ${(props) => props.theme.base_text};
`
export const StyleCoffee = styled(StyleBaseBolinha)`
  background: ${(props) => props.theme.purple};
`
export const StyleConteinerList = styled.div`
  /* border: 1px solid red; */

  width: 70rem;
  height: calc(auto);

  display: flex;

  margin-top: 1rem;

  flex-direction: column;
  gap: 3.37rem;

  & > div:first-child {
    width: 100%;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.base_subtitle};
    font-size: 2rem;
  }
`
