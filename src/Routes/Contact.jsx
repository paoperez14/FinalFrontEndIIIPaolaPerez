import Form from '../Components/Form';
import React, {useState, useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
   const [contacto, setContacto] = useState([]);

  const getContacto = async () => {
    const res = await fetch ('');
    const data = await res.json();
    setContacto (data)

  }

useEffect(() => {
  getContacto()
}, []);

  return (
    <div className="formulario">
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
    </div>
    <div><Form/></div>
    </div>

    
  )
}

export default Contact