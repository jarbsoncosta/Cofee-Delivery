import styled from 'styled-components'

export const BannerContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  height: 34rem;
  .title {
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ul li {
      list-style: none;
      font-size: 48px;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['gray-900']};
      font-weight: 800;
    }
    span {
      font-size: 20px;
      line-height: 130%;
    }
  }
  .divImg {
  }
`
