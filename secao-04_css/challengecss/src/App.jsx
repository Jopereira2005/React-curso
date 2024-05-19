import { useState } from 'react'
import CarDetails from './components/CarDetails'

import './App.css'

function App() {
  const cars = [
    {id: 1, name: "Ferrari 208 GT4.", brand: "Ferrari", color: "Vermelho", usageState: "novo"},
    {id: 2, name: "Porsche Panamera.", brand: "Porsche", color: "Preto", usageState: "semi usado"},
    {id: 3, name: "Audi Q8 E-Tron.", brand: "Audi", color: "Prata", usageState: "usado"},
  ]

  return (
    <>
    <h1>Detalhes do carro</h1>
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          name={car.name}
          brand={car.brand}
          color= {car.color}
          usageState={car.usageState}
        />
      ))}
    </>
  )
}

export default App
