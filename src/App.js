import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import "./App.css";


function App() {

  //definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState("");
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {

        const url = `https://api.jornalia.net/api/v1/articles?page=1&apiKey=82d9b0e7b5d747e4afb87abd17cab3f6&categories=${categoria}`

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />
          <ListadoNoticias 
            noticias={noticias}
          />
      </div>
    </>
  );
}

export default App;
