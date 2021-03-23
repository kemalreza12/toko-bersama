/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                <form class="input-group">
                  <a class="navbar-brand">Toko Bersama</a>
                    <ul class="d-flex flex-row justify-content-center navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mr-2">
                            <a class="nav-link active" aria-current="page" href="#">Kategori</a>
                        </li>
                        <li className="input-group">
                          <input class="p-2 w-100 form-control" type="search" placeholder="Search" aria-label="Search" id="basic-addon1"></input>  
                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                        </li>
                    </ul>
                </form>
              </div>
            </nav>
        </div>
    );
}

export default Navbar