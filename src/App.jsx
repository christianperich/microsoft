import "./App.css";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import { BotonesMicrosoft } from "./components/BotonesMicrosoft";
import { SiWindows11, SiXbox } from "react-icons/si";
import { Blog } from "./components/Blog";
import { useEffect, useState } from "react";
import blogPersonasData from './json/blogPersonas.json'
import blogEmpresasData from './json/blogEmpresas.json'
import { Info } from "./components/Info";
import { FollowUs } from "./components/FollowUs";

function App() {

//carga íconos de Microsoft
  const iconos = [
    {
      icono: <SiWindows11 />,
      texto: "Elige tu Microsoft 365",
    },
    {
      icono: <SiXbox />,
      texto: "Comprar Xbox",
    },
    {
      icono: <SiWindows11 />,
      texto: "Obtener Windows 11",
    },
  ];

//Carga info Blog para personas
  const [blogPersonas, setBlogPersonas] = useState([]) 

  useEffect(()=>{
    setBlogPersonas(blogPersonasData)
  })
  
//Carga info Blog Empresas
  const [blogEmpresas, setBlogEmpresas] = useState([])
  
  useEffect(()=>{
    setBlogEmpresas(blogEmpresasData)
  })

  return (
    <>
      <NavBar />
      <Landing />
      <BotonesMicrosoft botones={iconos} />
      <Blog blogs={blogPersonas} />
      <Info />
      <h2 className="titulo-empresa">Para la empresa</h2>
      <Blog blogs={blogEmpresas} />
      <FollowUs />
    </>
  );
}

export default App;
