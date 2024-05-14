const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
      </ul>
      {(idade >= 18) ? <p>Você está habilitado para tirar carta</p> : <p>Você não está habilitado para tirar carta</p>}
    </div>
  );
};

export default UserDetails;