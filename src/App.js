import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";
import FavContextProvider from "./contexts/FavoriteContext";
import ProductsContextProvider from "./contexts/productsContext";

import Routing from "./Routing";

function App() {
  return (
    <CartContextProvider>
      <FavContextProvider>
        <ProductsContextProvider>
          <AuthContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </AuthContextProvider>
        </ProductsContextProvider>
      </FavContextProvider>
    </CartContextProvider>
  );
}

export default App;
