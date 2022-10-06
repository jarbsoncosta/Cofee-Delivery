import styled from 'styled-components'

export const ProductsContainer = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  h1 {
    margin-top: 2rem;
  }
  .cards {
    padding: 3.37rem 0;
    display: flex;
    gap: 2rem;
  }
  .card {
    border-radius: 6px 36px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 16.625rem;
    height: 19.375rem;
    p {
      font-size: 0.625rem;
      border-radius: 100px;
      padding: 4px 8px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-weight: 700;
    }
    background: ${(props) => props.theme['gray-100']};
    img {
      margin-top: -3.5rem;
      width: 7.5rem;
      height: 7.5rem;
    }
    strong {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
    }
    span {
      text-align: center;
      font-size: 0.875rem;
    }
  }
  .categories {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ValueqQantity = styled.div`
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  .price {
    display: flex;
    align-items: center;
    height: 2.37rem;
    strong {
      font-size: 1.5rem;
    }
  }

  .amount-button-cart {
    height: 2.37rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .amount {
    padding: 0 0.5rem;
    border-radius: 6px;
    height: 2.37rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${(props) => props.theme['gray-400']};
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
    span {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
    }
  }

  .buttonCart {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0.5rem;
    width: 2.37rem;
    height: 2.37rem;
    background: ${(props) => props.theme['purple-dark']};
  }
  svg {
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`
