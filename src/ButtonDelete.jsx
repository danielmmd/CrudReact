import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import App from './App';

function ButtonDelete({ id, onEliminar }) {

  const handleClick = () => {
    // Realiza la solicitud de eliminación utilizando fetch
    
    fetch(`https://seminariodeactualizacion.onrender.com/api/persona/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(id)
      console.log(responseData);
      App();
      onEliminar();
      // Ejecuta la función de actualización proporcionada por el componente padre
      
    })
    .catch(error => {
      // Maneja los errores aquí
      console.error(error);
    });
    
  };

  return (
    <button className="btn btn-danger" onClick={handleClick}>Eliminar</button>
  );

    ButtonDelete.propTypes = {
    id: PropTypes.number.isRequired,
    onEliminar: PropTypes.func.isRequired
  };

}

export default ButtonDelete;