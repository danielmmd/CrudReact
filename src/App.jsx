import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttoninsert from './Buttoninsert';
import ButtonDelete from './ButtonDelete';
import ButtonActualizar from './ButtonActualizar';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('https://seminariodeactualizacion.onrender.com/api/persona/')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleInsertData(newData) {
    setData(prevData => [...prevData, newData]);
  }

  function handleDeleteData() {
    fetchData(); // Actualiza los datos después de eliminar un elemento
  }

  return (
    <>
    <Buttoninsert onInsert={handleInsertData}/>
      <table className="table table-dark table-striped">
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
                
              <ButtonDelete id={item.id} onEliminar={handleDeleteData}/>
              <ButtonActualizar id={item.id} onInsert={handleDeleteData}/>
                 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  );
}

export default App;