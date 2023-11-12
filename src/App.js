import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/home_page/HomePage'
import Footer from './customer/components/footer/Footer'
import Product from './customer/components/product/Product'
import ProductDetails from './customer/components/product_details/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
