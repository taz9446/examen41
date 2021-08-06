import React from 'react'

const MenuNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light p-3" style={{backgroundColor: 'rgb(255 255 244)'}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">GAMING <b>TECHNOLOGY</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" target="_blank" href="https://dragon-technology-eirl.netlify.app/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  target="_blank" href="http://thealexmen11.epizy.com/">Pagina 01</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SubMenu
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item"  target="_blank"  href="http://thealexmen11.epizy.com/informacion/">Informacion</a></li>
                    <li><a className="dropdown-item"  target="_blank" href="http://thealexmen11.epizy.com/ubicacion/">Galeria Laptops</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">stock(proximamente)</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        </div>
    )
}

export default MenuNav
