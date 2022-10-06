import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  align-items: center;

  .address-cart {
    display: flex;
    gap: 1rem;
  }
  .address {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 2.37rem;
    padding: 0 0.5rem;
    gap: 0.5rem;
    background: ${(props) => props.theme['purple-light']};
    p {
      color: ${(props) => props.theme['purple-dark']};
      font-size: 0.875rem;
      line-height: 130%;
    }
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  .cart {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 2.37rem;
    width: 2.37rem;
    background: ${(props) => props.theme['yellow-light']};
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
