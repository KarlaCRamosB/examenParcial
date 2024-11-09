import { useState } from 'react';
import Formulario from './components/formulario';
import Card from './components/Card';
import './App.css';

function App() {
  const [user, setUser] = useState({
    nombre: '',
    cancionFav: '',
    cantanteFav: ''
  });
  
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.nombre.trim().length >= 3 && 
      user.nombre.charAt(0) !== ' ' && 
      user.cancionFav.trim().length >= 6
    ) {
      setShow(true);
      setErr('');
    } else {
      setErr('Por favor checa que la información sea correcta');
      setShow(false);
    }
  };

  return (
    <div className="App">
      <Formulario user={user} setUser={setUser} handleSubmit={handleSubmit} err={err} />
      
      {show && (
        <Card
          nombre={user.nombre}
          cancionFav={user.cancionFav}
          cantanteFav={user.cantanteFav}
        />
      )}
    </div>
  );
}

export default App;
