import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsContainer from "./components/ProductsBlock/ProductsContainer";
import CartContainer from './components/Cart/CartContainer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact={true}>
          <ProductsContainer />
        </Route>
        <Route path='/cart'>
          <CartContainer /></Route>
      </Switch>
    </>
  );
}

export default App;
