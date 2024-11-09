import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({ nombre, cancionFav, cantanteFav }) => {
  return (
    <div className="card">
      <h2>¡Hola, {nombre}!</h2>
      <p>
        Tu canción favorita es <strong>{cancionFav}</strong> del cantante{' '}
        <strong>{cantanteFav || "No especificado"}</strong>.
      </p>
    </div>
  );
};

Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  cancionFav: PropTypes.string.isRequired,
  cantanteFav: PropTypes.string
};

export default Card;
