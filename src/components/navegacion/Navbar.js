
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link to='/'>
                        <img src='./titulo.png' width='110'/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contacto' >Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/redes' >Redes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Lista' >Lista</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
