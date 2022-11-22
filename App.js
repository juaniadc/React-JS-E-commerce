import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido"}/>  
      </main>
    </div>
  );
}

export default App;
