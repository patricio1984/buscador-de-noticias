import React from 'react';
import PropTypes from "prop-types";

const Noticia = ({noticia}) => {

    //extraer los datos
    const { imageUrl, sourceUrl, title, description, provider } = noticia;

    const imagen = (imageUrl) 
        ?   <div className="card-image">
                <img src={imageUrl} alt={title} />
                <span className="card-title">{provider._id}</span>
            </div>  : null;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card large">
                
                {imagen}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;