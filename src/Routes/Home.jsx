import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {dentistas} = useContext(ContextGlobal);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       {dentistas.map((dentista) => (
        <div key={dentista.id}>
          <Card{...dentista} dentista={dentista}/>
        </div>
       ))}
      </div>
    </main>
  )
}

export default Home