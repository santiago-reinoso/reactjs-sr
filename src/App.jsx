import React from "react";
import {browserrouter as router,route,routes} from 'react-router-dom';
import navbar from "./components/NavBar";
import itemlistcontainer from "./components/itemListContainer";
import inicio from "./components/inicio";
import ayuda from "./components/ayuda";
import nosotros from "./components/nosotros";
import productos from "./components/productos";

function app() {
return(
  <router>
    <navbar/>
    <routes>
    <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/visitanos" element={<Visitanos />} />
        <Route path="/ayuda" element={<Ayuda />} />
</routes>
  </router>
)  ;
}
export default app;


