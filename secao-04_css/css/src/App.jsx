import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponent from './components/MyComponent'

import './App.css'
function App() {
  const n = 15; 
  const [name] = useState("Matheus");
  const redTitle = true;

  return (
    <div className='App'>
      {/* CSS Global*/}
      <h1>React com CSS</h1>
      {/* CSS Componente*/}
      <p>Este é o paragrafo do componente</p>
      <MyComponent/>

      {/* Inline CSS */}

      <p style={{ 
          color: "blue", 
          padding: "25px", 
          borderTop: "2px solid red"
      }}>
        Este elemento foi estilizado de forma inline
      </p>

      <p style={{ 
        color: "blue", 
        padding: "25px", 
        borderTop: "2px solid red"
      }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS Inline Dinâmino */}

      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinâmico
      </h2>

      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinâmico
      </h2>

      <h2 style={
        name == "Matheus" 
          ? {color: "green", backgroundColor: "black"} 
          : null
        }>
        CSS dinâmico
      </h2>

      {/* Classe Dinâmica */}

      <h2 className={redTitle ? "red-title" : "title"}>
        Classe Dinâmica
      </h2>

      {/* CSS Modules */}
      

    </div>
  )
}

export default App
