import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsContainer from "./components/ProductsBlock/ProductsContainer";
import CartContainer from './components/Cart/CartContainer';

function App() {
  return (
    <>
      <Navbar />
      <ProductsContainer />
      <CartContainer/>
    </>
  );
}

export default App;
