import React, {useState } from "react";
import { Link } from "react-router-dom";
import {saveDentistasFromStorage} from './utils/global.context.jsx';





const Card = ({ id, name, username}) => {
  const [dentista, setDentista] = useState (false); 
  
  


  const addFav = ()=>{
 const favorito = saveDentistasFromStorage ({ id, name, username});
   esFavorito(favorito);
  }

     const esFavorito = (fav) => {
      setDentista(fav);
     }

  return (
    <div>
    <div className="card" >   
    <Link  to={`/dentista/${id}`}>
        <img className="imagen" src="/images/doctor.jpg" alt="dentistas foto"/>
        <p className="texto">{name}</p>
        <p className="texto">{username}</p>
        </Link> 
        <button 
        onClick={addFav} 
        className="favButton">
        ❤️
        </button>
        </div>
       
        
    </div>
   

    
  );
};

export default Card;