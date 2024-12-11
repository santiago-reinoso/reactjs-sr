import react from 'react';
function ayuda() {
    return(
        <div>
            <h1>Sneakers Mania</h1>
      <h1>¿En qué te podemos ayudar?</h1>
      <main className="caja-item">
        <div>
          <label htmlFor="consulta">
            Comentanos tu inquietud <br />
            Registrate y recibe todas las novedades y ofertas exclusivas
          </label>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>
          <input type="text" placeholder="Nombre y Apellido" id="consulta" />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </main>
        </div>
    );
}
export default ayuda;