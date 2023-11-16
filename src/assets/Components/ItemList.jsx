import React from 'react'


const productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', imagen: '/descarga.jpg' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', imagen: '/descarga.jpg' },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3', imagen: '/descarga.jpg' },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del producto 4', imagen: '/descarga.jpg' },
    { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del producto 5', imagen: '/descarga.jpg' },
    { id: 6, nombre: 'Producto 6', descripcion: 'Descripción del producto 6', imagen: '/descarga.jpg' },
];

const ItemList = () => {
    return (
        <div className="container-fluid bg-success">
            <div className="row">
                {productos.map((producto) => (
                    <div key={producto.id} className="col-md-3 mt-4">
                        <div className="card-container bg-warning">
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList