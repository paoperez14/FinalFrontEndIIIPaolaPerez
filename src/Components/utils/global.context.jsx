import React, {createContext, useReducer, useEffect, useState } from "react";


export const ContextGlobal = createContext();

export const getDentistaFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};


export const saveDentistasFromStorage = (odontologo) => {
  const storageFavs = getDentistaFromStorage();
  const isFavOnList = storageFavs.filter(fav => {
      return fav.id === odontologo.id
  });
  if (isFavOnList.length === 0) {
      storageFavs.push(odontologo)
      localStorage.setItem("favs", JSON.stringify(storageFavs));
      alert("Dentista agregado a Favoritos");
      return true;
  }
  else {
      alert("El dentista seleccionado ya está en favoritos");
      return false;
  }
};

const reducerFun = (state, action) => {
   switch(action.type){
    case "oscuro":
      return{
        bgFlag: "claro",
        navbgColor: "#1f1f20",
        bgColor:"#393944",
        ftColor: "#eee",
        data: state.data
      }

      case "claro":
        return{
          bgFlag: "oscuro",
          ftColor: "#393944",
          navbgColor: "#d6d6d6",
          bgColor: "#eee", 
          data: state.data
        }
        case "data":
        return { ...state, data: action.payload}
    default:
      return state; 
   }
  };

  export const GlobalContextProvider = ({ children }) => {
    const [dentistas, setDentistas] = useState ([]);
    const initalState = { bgFlag: "oscuro",navbgColor: "#d6d6d6", ftColor: "#393944", bgColor: "#eee", data: []}
    const [state, dispatch] = useReducer (reducerFun, initalState)
  
    const getDestinta = async () => {
        try {
          fetch ('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => setDentistas(data));
        } catch (error) {
          console.error(error)
        }
    
    }
  
    useEffect(() => {
     getDestinta ();
    }, []);
  

  



  return (
    <ContextGlobal.Provider value={{dentistas, state, dispatch}}> 
    <div style={{ backgroundColor: `${state.bgColor}`, width: "100%", height: "200vh", minHeight: "100%", color: `${state.ftColor}` }}>
    {children}
    </div>     
    </ContextGlobal.Provider>
  );
};

export default GlobalContextProvider;