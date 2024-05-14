import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

import { useState } from 'react';
import './App.css';

function App() {
  const [userName] = useState("Carlos");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km:0},
    {id: 2, brand: "Renault", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Mercedes", color: "Azul", newCar: true, km: 1000},
  ]
  
  const users = [
    {id: 1, nome: "João", idade: 18, profissao: "Estudante"},
    {id: 2, nome: "Beatriz", idade: 18, profissao: "Estudante"},
    {id: 3, nome: "Lucas", idade: 18, profissao: "Técnico em TI"},
    {id: 4, nome: "Enzo", idade: 6, profissao: "Desempregado"},
    {id: 5, nome: "Gabriel", idade: 17, profissao: "Desempregado"}
  ]

  function showMensage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  
  return (
    <div className='App'>
      <h1>React Avançado</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Imagem de paisagem"/>
      </div>

      {/* Imagem em assets*/}
      <div>
        <img src="./assets/city.jpg" alt="Imagem de cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={userName}/>

      {/* Destructuring */}
      <CarDetails brand="Nissan" km={10000} color="Preto" newCar={false}/>

      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={450} color="Preto" newCar={false}/>

      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color= {car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragments propFragment="teste"/>

      {/* Children */}
      <Container myValue="teste 01">
        <p>E este é o conteúdo</p>
      </Container>

      <Container myValue="teste 02">
        <p>E este é o conteúdo do segundo container</p>
      </Container>

      {/*Executar função */}
        <ExecuteFunction myFunction={showMensage}/>

      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* Desafio 4*/}

      {users.map((user) => (
        <UserDetails 
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))}
      
    </div>
  )
}

export default App
