import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    const estiloCarrito = {
        width: '40px',
        height: '40px'
    }
    const estiloLogo = {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer', 
        outline: 'none'
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <button style={estiloLogo}>
               <img style={estiloCarrito} src="/pngwing.com.png" alt=""/>
            </button>
            <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Tienda<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Armas</a>
                    <a className="nav-item nav-link" href="#">Armadruras</a>
                    <a className="nav-item nav-link disabled" href="#">Magia</a>
                </div>
               
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default Navbar
