import React, { useState } from 'react';

interface SideMenuProps {
  children: React.ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
  const [productCollape, setProductCollapse] = useState<boolean>(false)
  const [menuCollapse, setMenuCollapse] = useState<boolean>(false)

  return (
    <div className="d-flex">
      <div className="flex-shrink-0 p-3 bg-dark" style={{ width: '280px', height: '100vh' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 ms-2">Menu Creation</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button
              className="nav-link text-white d-flex align-items-center justify-content-between"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-house-fill me-2"></i>
              <a href="/" className="link-light d-inline-flex text-decoration-none rounded">Home</a>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-white d-flex align-items-center justify-content-between"
              data-bs-toggle="collapse"
              data-bs-target="#menus-collapse"
              aria-expanded={menuCollapse}
              onClick={()=>{setMenuCollapse(!menuCollapse)}}
            >
              <i className="bi bi-qr-code-scan me-2"></i>
              Menus
              <i className={menuCollapse ? "bi bi-chevron-up ms-2" : "bi bi-chevron-down ms-2"}></i>
            </button>
            <div className="collapse" id="menus-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="/menus" className="link-light d-inline-flex text-decoration-none rounded">Menus</a></li>
                <li><a href="/menus-templates" className="link-light d-inline-flex text-decoration-none rounded">Templates</a></li>
                <li><a href="/menus-categories" className="link-light d-inline-flex text-decoration-none rounded">Categories</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-white d-flex align-items-center justify-content-between"
              data-bs-toggle="collapse"
              data-bs-target="#products-collapse"
              aria-expanded={productCollape}
              onClick={()=>{setProductCollapse(!productCollape)}}
            >
              <i className="bi bi-box-seam me-2"></i>
              Products
              <i className={productCollape ? "bi bi-chevron-up ms-2" : "bi bi-chevron-down ms-2"}></i>
            </button>
            <div className="collapse" id="products-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="/products" className="link-light d-inline-flex text-decoration-none rounded">Products</a></li>
                <li><a href="/products-families" className="link-light d-inline-flex text-decoration-none rounded">Families</a></li>
                <li><a href="/products-categories" className="link-light d-inline-flex text-decoration-none rounded">Categories</a></li>
                <li><a href="/products-ingredients" className="link-light d-inline-flex text-decoration-none rounded">Ingredients</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
              <a href="/restaurant" className="nav-link text-white">
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