import { useState } from "react"
import "./MyForm.css"

function MyForm({ user }) {
  // 5 - controled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState(user ? user.bio : "")
  const [role, setRole] = useState(user ? user.role : "")


  const handleName = (e) => {
    setName(e.target.value);
  }

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado Formulario");
    console.log(name, email, bio, role);

    // 7 - limpar fomulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - criação de form */}
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" value={ name } placeholder="Digite seu nome" onChange={ handleName }/>  
        </div>

        {/* 2 - label envolvendo input */}
        <label>
          <span>Email: </span>
          {/* 4 - simplificação de manipulação de state */}
          <input 
            type="email"
            value={ email } 
            placeholder="Digite o seu email" 
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        {/* 8 - textarea */}
        <label>
          <span>Bio: </span>
          <textarea 
            name="name" 
            value={ bio } 
            placeholder="Descrição do usuário" 
            onChange={ (e) => setBio(e.target.value) }
          ></textarea>
        </label>

        {/* 9 - select */}
        <label>
          <span>Função Sistema</span>
          <select 
            name="role" 
            value={role} 
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
            <option value="paxe">Paxe</option>
           </select>
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default MyForm