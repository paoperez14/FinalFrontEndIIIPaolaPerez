import React, {useState, useEffect} from "react";
import { getDentistaFromStorage } from '../Components/utils/global.context.jsx'
import Card from '../Components/Card.jsx';




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoritos, setFavoritos] = useState ("");

  useEffect(() => {
   setFavoritos (getDentistaFromStorage());
  }, []);
 

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
     {favoritos
     ? favoritos.map ((favorito) => (
      <Card {...favorito} key={favorito.id}/>
     )) : null}
      </div>
    </div>
  );
};

export default Favs;