import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext'; // Ensure CartContext is correctly set up
import Login from './components/Login'; // Ensure correct path
import Register from './components/Register'; // Ensure correct path
import AddProduct from './pages/AddProduct';
import UserProfile from './pages/UserProfile';

const App = () => {

  const allProducts = [
    { _id: 1, name: 'Product 1', price: 100, imageUrl: 'https://via.placeholder.com/300', category: 'Electronics', rating: 4.5 },
    { _id: 2, name: 'Product 2', price: 120, imageUrl: 'https://via.placeholder.com/300', category: 'Clothing', rating: 3.8 },
    { _id: 3, name: 'Product 3', price: 150, imageUrl: 'https://via.placeholder.com/300', category: 'Electronics', rating: 4.2 },
    { _id: 4, name: 'Product 4', price: 180, imageUrl: 'https://via.placeholder.com/300', category: 'Clothing', rating: 4.7 },
    { _id: 5, name: 'Product 5', price: 190, imageUrl: 'https://via.placeholder.com/300', category: 'Electronics', rating: 4.1 },
    { _id: 6, name: 'Product 6', price: 80, imageUrl: 'https://via.placeholder.com/300', category: 'Clothing', rating: 3.5 },
  ];
  return (
    <div style={{ backgroundColor: "#f0f9ff" }}>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home allProducts={allProducts} />} />
          <Route path='/cart' element={<Cart allProducts={allProducts} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
