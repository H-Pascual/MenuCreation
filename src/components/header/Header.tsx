import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SideMenuProps {
  children: React.ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
  const [productCollapse, setProductCollapse] = useState<boolean>(() => {
    return localStorage.getItem('productCollapse') === 'true'
  })

  const [menuCollapse, setMenuCollapse] = useState<boolean>(() => {
    return localStorage.getItem('menuCollapse') === 'true'
  })

  const location = useLocation()

  useEffect(() => {
    localStorage.setItem('productCollapse', productCollapse.toString())
    localStorage.setItem('menuCollapse', menuCollapse.toString())
  }, [productCollapse, menuCollapse])

  return (
    <div className="d-flex">
      <div className="flex-shrink-0 p-3 bg-dark" style={{ width: '280px', height: '100vh' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 ms-2">Menu Creation</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`}>
              <i className="bi bi-house-fill me-2"></i>
              Home
            </a>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-white d-flex align-items-center justify-content-between ${(location.pathname === '/menus' || location.pathname === '/menus-templates' || location.pathname === '/menus-categories') ? 'active' : ''}`}
              data-bs-toggle="collapse"
              data-bs-target="#menus-collapse"
              aria-expanded={menuCollapse}
              onClick={() => setMenuCollapse(!menuCollapse)}
            >
              <i className="bi bi-qr-code-scan me-2"></i>
              Menus
              <i className={menuCollapse ? 'bi bi-chevron-up ms-2' : 'bi bi-chevron-down ms-2'}></i>
            </button>
            <div className={`collapse ${menuCollapse ? 'show' : ''}`} id="menus-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                <li>
                  <a href="/menus" className={`link-light d-inline-flex text-decoration-none rounded ${location.pathname === '/menus' ? 'text-primary' : ''}`}>
                    Menus
                  </a>
                </li>
                <li>
                  <a href="/menus-templates" className={`link-light d-inline-flex text-decoration-none rounded ${location.pathname === '/menus-templates' ? 'text-primary' : ''}`}>
                    Templates
                  </a>
                </li>
                <li>
                  <a href="/menus-categories" className={`link-light d-inline-flex text-decoration-none rounded ${location.pathname === '/menus-categories' ? 'text-primary' : ''}`}>
                    Categories
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-white d-flex align-items-center justify-content-between ${(location.pathname === '/products' || location.pathname === '/products-families' || location.pathname === '/products-categories' || location.pathname === '/products-ingredients') ? 'active' : ''}`}
              data-bs-toggle="collapse"
              data-bs-target="#products-collapse"
              aria-expanded={productCollapse}
              onClick={() => setProductCollapse(!productCollapse)}
            >
              <i className="bi bi-box-seam me-2"></i>
              Products
              <i className={productCollapse ? 'bi bi-chevron-up ms-2' : 'bi bi-chevron-down ms-2'}></i>
            </button>
            <div className={`collapse ${productCollapse ? 'show' : ''}`} id="products-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                <li>
                  <a href="/products" className={`link-light d-inline-flex text-decoration-none rounded ${location.pathname === '/products' ? 'text-primary' : ''}`}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="/products-families" className={`link-light d-inline-flex text-decoration-none rounded ${location.pathname === '/products-families' ? 'text-primary' : ''}`}>
                    Families
                  </a>
                </li>
                <li>
                  <a href="/products-categories" className={`link-light d-inline-flex text-decoration-none rounded ${location.pathname === '/products-categories' ? 'text-primary' : ''}`}>
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/products-ingredients" className={`link-light text-decoration-none rounded ${location.pathname === '/products-ingredients' ? 'text-primary' : ''}`}>
                    Ingredients
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="/restaurant" className={`nav-link text-white ${location.pathname === '/restaurant' ? 'active' : ''}`}>
              <i className="bi bi-briefcase me-2"></i>
              Restaurant
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-person-circle me-2" style={{ fontSize: '24px' }}></i>
            <strong>User</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="/profile">Profile</a></li>
            <li><a className="dropdown-item" href="/settings">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/sign-out">Sign out</a></li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-3">
        {children}
      </div>
    </div>
  )
}

export default SideMenu