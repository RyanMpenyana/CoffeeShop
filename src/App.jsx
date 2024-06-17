import Header from "./components/Header"
import Landing, { CoffeeCards } from "./components/Landing"
import ProductsPage from "./components/ProductsPage"
import { Center, FlexDiv } from "./components/Containers"
import Footer from "./components/Footer"
import { CartOverlay } from "./components/Cart"

function App() {

  return (
    <>
    <CartOverlay/>
        <Header/>
    <Center>
        <Landing/>
        <ProductsPage/>
    </Center>
    <Footer/>
    </>
  )
}

export default App
