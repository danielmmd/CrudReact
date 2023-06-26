import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


function Buttoninsert() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');  


  const handleInsert = (event) => {
    event.preventDefault();

    const data = {
        nombre: nombre,
        email: email,
        direccion: direccion,
        telefono: telefono,
        edad: edad,
        apellido: apellido

      };
  
    fetch('https://seminariodeactualizacion.onrender.com/api/persona/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(responseData => {
      // Maneja la respuesta del servidor aquí
      console.log(responseData);
    })
    .catch(error => {
      // Maneja los errores aquí
      console.error(error);
        console.error('Error de red:', error);
      });

      alert('Elemento agregado correctamente');
      
      setShowModal(false);
  };
  


  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Agregar
      </Button>

      {/* Modal de inserción */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar elemento</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleInsert}>
          <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                value={nombre}
                className="form-control"
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                value={apellido}
                className="form-control"
                onChange={(event) => setApellido(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edad">Edad</label>
              <input
                type="number"
                value={edad}
                className="form-control"
                onChange={(event) => setEdad(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                value={telefono}
                className="form-control"
                onChange={(event) => setTelefono(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Direccion</label>
              <input
                type="text"
                value={direccion}
                className="form-control"
                onChange={(event) => setDireccion(event.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleInsert}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Buttoninsert;