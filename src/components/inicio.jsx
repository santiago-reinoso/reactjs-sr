import react from 'react';

function inicio() {
    return(
        <div className="fondo-pagina">
<h1>Sneakers Mania</h1>
<footer>
        <div className="redessociales">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/img/instagram.jpg" alt="logo instagram" className="ig-item" />
          </a>
          <a href="https://www.tiktok.com/es/" target="_blank" rel="noreferrer">
            <img src="/img/tiktok.jpg" alt="logo tiktok" className="tiktok-item" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
            <img src="/img/whatsapp.jpg" alt="logo whatsapp" className="wsp-item" />
          </a>
        </div>
      </footer>
        </div>
    );
}

export default inicio;