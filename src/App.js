import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";

import Routing from "./Routing";

function App() {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
