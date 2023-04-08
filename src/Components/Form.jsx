import React from "react";
import { useState } from "react";


const Form = () => {
  const [nombre, setNombre] = useState ("");
  const [email, setEmail] = useState ("");
  const [mostrar, setMostrar] = useState (false);
  const [error, setError] = useState (false);
   
  
  const validarMail = (email) => {
    let validarMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)+$/;
   return validarMail.test(email)
  }
  
    function subidaDeDatos (x) {
      x.preventDefault();
      if (nombre.length >= 5 && validarMail(email)) {
         setMostrar (true)
         setError (false)
      } else {
        setError (true)
      } 
    };

  const onChangeNombre = (x) => {
    setNombre(x.target.value)
  };

  const onChangeEmail = (x) => {
    setEmail(x.target.value)
  };
  

  return (
    <div > 
    <form  onSubmit={subidaDeDatos}>
        <div>
            <input
               className="container"
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={onChangeNombre}
            />
            </div>
            <div>
             <input
                className="container"
                type="email"
                placeholder="Email" 
                value={email}
                onChange={onChangeEmail}
            />
                 
            </div>
            <div><button className="button" type="submit">Enviar</button></div> 
            <div>
        </div>
        {error && <h5>Por favor verifique su información nuevamente</h5>}
        {mostrar && <h5>Gracias {nombre}, te contactaremos cuando antes vía mail</h5>}
    </form>
    </div>
  );
};

export default Form;