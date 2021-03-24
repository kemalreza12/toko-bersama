/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbarstyle.css'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <form class="d-flex flex-row input-group row">
                  <a class="navbar-brand">Toko Bersama</a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="d-flex flex-row navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mr-2 col-2">
                            <a class="nav-link active" aria-current="page" href="#">Kategori</a>
                        </li>
                        <li className="nav-item input-group">
                        <div class="wrap">
                           <div class="search">
                              <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                              <button type="submit" class="searchButton">
                                <span><i class="fa fa-search"></i></span>
                             </button>
                           </div>
                        </div>
                        </li>
                        <li class="nav-item">
                          <button type="submit" class="cart">
                            <span><i class="fas fa-shopping-cart"></i></span>
                           </button>
                        </li>
                    </ul>
                    </div>
                </form>
              </div>
            </nav>
        </div>
    );
}

export default Navbar