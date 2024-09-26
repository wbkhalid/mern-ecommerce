import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './pages/AddProduct';
import UserProfile from './pages/UserProfile';
import ProductDetails from './pages/ProductDetails';

const App = () => {

  const allProducts = [
    { _id: 1, name: 'Product 1', price: 100, imageUrl: 'https://via.placeholder.com/300', category: 'Electronics', rating: 4.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur reiciendis vel tempore dolorem necessitatibus esse doloremque consequatur fuga sint nostrum modi soluta nulla, vitae dolorum voluptate assumenda possimus libero!' },
    { _id: 2, name: 'Product 2', price: 120, imageUrl: 'https://via.placeholder.com/300', category: 'Clothing', rating: 3.8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur reiciendis vel tempore dolorem necessitatibus esse doloremque consequatur fuga sint nostrum modi soluta nulla, vitae dolorum voluptate assumenda possimus libero!' },
    { _id: 3, name: 'Product 3', price: 150, imageUrl: 'https://via.placeholder.com/300', category: 'Electronics', rating: 4.2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur reiciendis vel tempore dolorem necessitatibus esse doloremque consequatur fuga sint nostrum modi soluta nulla, vitae dolorum voluptate assumenda possimus libero!' },
    { _id: 4, name: 'Product 4', price: 180, imageUrl: 'https://via.placeholder.com/300', category: 'Clothing', rating: 4.7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur reiciendis vel tempore dolorem necessitatibus esse doloremque consequatur fuga sint nostrum modi soluta nulla, vitae dolorum voluptate assumenda possimus libero!' },
    { _id: 5, name: 'Product 5', price: 190, imageUrl: 'https://via.placeholder.com/300', category: 'Electronics', rating: 4.1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur reiciendis vel tempore dolorem necessitatibus esse doloremque consequatur fuga sint nostrum modi soluta nulla, vitae dolorum voluptate assumenda possimus libero!' },
    { _id: 6, name: 'Product 6', price: 80, imageUrl: 'https://via.placeholder.com/300', category: 'Clothing', rating: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur reiciendis vel tempore dolorem necessitatibus esse doloremque consequatur fuga sint nostrum modi soluta nulla, vitae dolorum voluptate assumenda possimus libero!' },
  ];
  return (
    <div style={{ backgroundColor: "#f0f9ff" }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home allProducts={allProducts} />} />
        <Route path='/cart' element={<Cart allProducts={allProducts} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/product/:productId' element={<ProductDetails allProducts={allProducts} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
