import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

import './App.css';

function App() {
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
    </div>
  )
}

export default App
