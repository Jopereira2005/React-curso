import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <h2>Foms</h2>
      <MyForm 
        user = {{ 
          name: "Paxe", 
          email: "paxe@paxe.com",
          bio: "sou o paxe",
          role: "paxe"
        }}/>
    </>
  )
}

export default App
