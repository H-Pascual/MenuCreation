import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Products from './pages/products/products/Products'
import ProductFamilies from './pages/products/product-families/ProductFamilies'
import ProductCategories from './pages/products/product-categories/ProductCategories'
import ProductIngredients from './pages/products/product-ingredients/ProductIngredients';
import Menus from './pages/menu-creation/menus/Menus'
import MenuTemplates from './pages/menu-creation/menu-templates/MenuTemplates'
import MenuCategories from './pages/menu-creation/menu-categories/MenuCategories'
import Restaurant from './pages/restaurant/restaurant/Restaurant'
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import MainLayout from './layouts/MainLayout';
import Error404 from './error/404';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas con Header y Footer usando MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />

        {/* Products */}
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/products-families" element={<MainLayout><ProductFamilies /></MainLayout>} />
        <Route path="/products-categories" element={<MainLayout><ProductCategories /></MainLayout>} />
        <Route path="/products-ingredients" element={<MainLayout><ProductIngredients /></MainLayout>} />

        {/* Menus */}
        <Route path="/menus" element={<MainLayout><Menus /></MainLayout>} />
        <Route path="/menus-templates" element={<MainLayout><MenuTemplates /></MainLayout>} />
        <Route path="/menus-categories" element={<MainLayout><MenuCategories /></MainLayout>} />

        {/* Restaurant */}
        <Route path="/restaurant" element={<MainLayout><Restaurant /></MainLayout>} />
        
        {/* Rutas sin Header y Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
