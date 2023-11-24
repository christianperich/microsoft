import './Blog.css'
import { IoIosArrowForward } from "react-icons/io";

export function Blog(props) {
  return (
    <div className="blog-container">
      <div className='entradas'>
        {props.blogs.map((entrada, index) => (
          <div key={index} className="entrada">
            <img src={entrada.imagen} alt="" />
            <h1>{entrada.titulo} </h1>
            <p>{entrada.descripcion} </p>
            <div className='acciones'>
              <a href="">{entrada.accion} </a>
              <p className='arrow'><IoIosArrowForward /></p> 
            </div>          
          </div>
        ))}
      </div>
      
    </div>
  );
}
