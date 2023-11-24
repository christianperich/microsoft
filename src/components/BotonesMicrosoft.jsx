import './BotonesMicrosoft.css'

export function BotonesMicrosoft(props) {
    return(
        <div className="botones-container">
            {props.botones.map((boton, index)=>(
                <div key={index} className='boton'>
                    <span className='icono'>
                        {boton.icono}
                    </span>
                    <a href="">{boton.texto} </a>
                </div>
            ))}
        </div>
    )
}