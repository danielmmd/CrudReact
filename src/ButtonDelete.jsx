import { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonDelete({ id, onEliminar }) {
  const handleClick = () => {
    fetch(`https://seminariodeactualizacion.onrender.com/api/persona/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(responseData => {
    
      onEliminar(); // Llama a la función de actualización proporcionada por el componente padre
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <button className="btn btn-danger mx-2" onClick={handleClick}>Eliminar</button>
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.number.isRequired,
  onEliminar: PropTypes.func.isRequired
};

export default ButtonDelete;
