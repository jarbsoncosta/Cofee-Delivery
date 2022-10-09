import { Banner } from './components/Banner'
import { Products } from './components/Products'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  )
}
