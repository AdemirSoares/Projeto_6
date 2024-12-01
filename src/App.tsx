import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <Container>
        <ProductsList />
      </Container>
      <Footer />
    </>
  )
}

export default App
