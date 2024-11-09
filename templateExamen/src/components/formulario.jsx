import React from 'react';
import './Formulario.css';

function Formulario({ user, setUser, handleSubmit, err }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre completo</label>
      <input
        id="nombre"
        type="text"
        value={user.nombre}
        onChange={(e) => setUser({ ...user, nombre: e.target.value })}
      />

      <label htmlFor="cancionFav">Canción favorita</label>
      <input
        id="cancionFav"
        type="text"
        value={user.cancionFav}
        onChange={(e) => setUser({ ...user, cancionFav: e.target.value })}
      />

      <label htmlFor="cantanteFav">Cantante de tu canción favorita</label>
      <input
        id="cantanteFav"
        type="text"
        value={user.cantanteFav}
        onChange={(e) => setUser({ ...user, cantanteFav: e.target.value })}
      />

      <button type="submit">Enviar</button>

      {err && <p className="error">{err}</p>}
    </form>
  );
}

export default Formulario;
