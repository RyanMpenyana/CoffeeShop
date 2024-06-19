import Header from "./components/Header"
import Landing, { CoffeeCards } from "./components/Landing"
import ProductsPage from "./components/ProductsPage"
import { Center, FlexDiv } from "./components/Containers"
import Footer from "./components/Footer"
import { CartOverlay } from "./components/Cart"
import ShopContextProvider from "./context/shop-context"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"

function App() {

  return (
    <ShopContextProvider>
    <CartOverlay/>
        <Header/>
    <Center>
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/products" element={<ProductsPage/>} />
            </Routes>
        </Router>
    </Center>
    <Footer/>
    </ShopContextProvider>
  )
}

export default App
