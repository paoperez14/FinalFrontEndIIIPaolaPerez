import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState([]);
  const { dentistas } = useContext(ContextGlobal);
  const params = useParams();

  const getDestinta = () => {
    let buscar = dentistas.filter((dentista) => dentista.id === parseInt(params.id));
    setDentista(buscar[0]);
    return buscar;
  };

  useEffect(() => {
    getDestinta();
  }, [params]);

  return (
    <div>
      {dentista && (
        <div>
          <h1>Detalle del dentista {dentista.id}</h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentista.name}</td>
                <td>{dentista.email}</td>
                <td>{dentista.phone}</td>
                <td>{dentista.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Detail;