
import './App.css';
import Bannar from './components/Bannar/Bannar';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div >
     <Header></Header>
     <Bannar></Bannar>
     <Card></Card>
     <Popular></Popular>
    </div>
  );
}

export default App;
