import styled from 'styled-components'

export const StyleHeader = styled.div`
  /* border: 1px solid; */

  position: fixed;
  transition: top 0.3s;
  z-index: 1000;
  background: ${(props) => props.theme.background};

  width: 90rem;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 5.3rem;
    height: 2.5rem;
  }
  div {
    display: flex;
    gap: 0.75rem;
  }
  span {
    width: 8.93rem;
    height: 2.37rem;

    padding-right: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.89rem;

    color: ${(props) => props.theme.purple_dark};
    gap: 0.25rem;

    background: ${(props) => props.theme.purple_light};
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const StyleContador = styled.div`
  display: flex;

  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;
  background: ${(props) => props.theme.yellow_dark};

  font-weight: lighter;
  color: ${(props) => props.theme.white};

  padding-top: 0.1rem;
  margin-bottom: 2rem;
  margin-left: -1.5rem;
`
