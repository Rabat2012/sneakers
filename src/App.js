import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
