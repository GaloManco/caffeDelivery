import styled from 'styled-components'

export const StyleCard = styled.div`
  width: 16rem;
  height: 19.37rem;

  display: flex;
  align-items: center;

  border-radius: 6px 36px 6px 36px;

  flex-direction: column;

  padding: 1.5rem;
  background: ${(props) => props.theme.base_card};

  img {
    margin-top: -3.4rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const StyleInforCard = styled.div`
  /* border: 1px solid blue; */
  width: 13.5rem;
  height: 11.13rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2:first-child {
    ul {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;

      gap: 0.25rem;

      li {
        background: ${(props) => props.theme.yellow_light};
        color: ${(props) => props.theme.yellow_dark};
        border-radius: 100px;
        font-size: 0.7rem;
        padding: 0.5rem;
        margin-top: 0.75rem;
      }
    }
  }
`
export const StyleInforCafe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;
  gap: 0.3rem;

  & > h1:first-child {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
    display: flex;
  }
  & > p {
    text-align: center;
    font-size: 0.9rem;
    font-family: 'Roboto';
    color: ${(props) => props.theme.base_label};
  }

  footer {
    /* border: 1px solid red; */

    display: flex;
    margin-top: 2.06rem;
    align-items: center;
    justify-content: center;
    gap: 1.43rem;

    & > h1:first-child {
      font-family: 'Baloo 2';
      text-align: center;
      color: ${(props) => props.theme.base_text};
    }
    & div {
      display: flex;
      gap: 10px;
      & span {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: ${(props) => props.theme.base_button};

        border-radius: 6px;

        width: 4.5rem;
        height: 2.37rem;

        font-size: 1rem;
        font-family: 'Roboto';
        font-weight: bold;

        & button {
          border: none;
          background: none;
          color: ${(props) => props.theme.purple};
          margin-top: 0.2rem;
          cursor: pointer;
        }
        & button:hover {
          color: ${(props) => props.theme.purple_dark};
        }
      }
      & button {
        border: none;
      }
    }
  }
`
