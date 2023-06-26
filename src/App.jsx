import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';
import Buttoninsert from './Buttoninsert';
import ButtonDelete from './ButtonDelete';






function App() {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    email: '',
    direccion: '',
  });

  useEffect(() => {
    fetch('https://seminariodeactualizacion.onrender.com/api/persona/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  function actualizarDatos() {
    fetch('https://seminariodeactualizacion.onrender.com/api/persona/')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleUpdate = () => {
    fetch(`https://seminariodeactualizacion.onrender.com/api/persona/${selectedItemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Elemento actualizado correctamente');
          setSelectedItemId(null); // Restablecer el ID seleccionado después de la actualización
          // Actualizar los datos en la lista
          setData((prevData) =>
            prevData.map((item) => {
              if (item.id === selectedItemId) {
                return { id: item.id, ...updatedData };
              }
              return item;
            })
          );
        } else {
          console.error('Error al actualizar el elemento');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  };

  const handleInputChange = (e, field) => {
    setUpdatedData({ ...updatedData, [field]: e.target.value });
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    setUpdatedData({
      nombre: '',
      apellido: '',
      edad: '',
      telefono: '',
      email: '',
      direccion: '',
    });
  };

  return (
    <>
    <Buttoninsert/>
      <table className="table table-striped-columns text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Direccion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.edad}</td>
              <td>{item.telefono}</td>
              <td>{item.email}</td>
              <td>{item.direccion}</td>
              <td>
                
                 <ButtonDelete id={item.id} onEliminar={actualizarDatos}/>
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedItemId(item.id)}
                >
                  Actualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={selectedItemId !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar elemento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                value={updatedData.nombre}
                onChange={(e) => handleInputChange(e, 'nombre')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="form-control"
                value={updatedData.apellido}
                onChange={(e) => handleInputChange(e, 'apellido')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edad">Edad</label>
              <input
                type="number"
                id="edad"
                className="form-control"
                value={updatedData.edad}
                onChange={(e) => handleInputChange(e, 'edad')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                id="telefono"
                className="form-control"
                value={updatedData.telefono}
                onChange={(e) => handleInputChange(e, 'telefono')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={updatedData.email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Direccion</label>
              <input
                type="text"
                id="direccion"
                className="form-control"
                value={updatedData.direccion}
                onChange={(e) => handleInputChange(e, 'direccion')}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Actualizar
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;