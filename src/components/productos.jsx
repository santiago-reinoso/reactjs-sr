import React from "react";

function productos() {
    return(
        <div>
            <h1>Sneakers Mania</h1>
      <h1 className="tipografiapesada">Productos</h1>
      <section className="photo-producto">
        <div className="card" style={{ width: '18rem' }}>
          <img src="/img/jordan retro 3.jpg" className="card-img-top" alt="jordan-retro-3" />
          <div className="card-body">
            <h5 className="card-title">Jordan Retro 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <br />130 USD</p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="/img/adidas campus.jpg" className="card-img-top" alt="adidas-campus" />
          <div className="card-body">
            <h5 className="card-title">Adidas Campus</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <br />110 USD</p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="img/new balance.jpg" className="card-img-top" alt="new-balance-2002r" />
          <div className="card-body">
            <h5 className="card-title">New Balance 2002R</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <br />125 USD</p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
      </section>
        </div>
    );
} 
export default productos;