
import './App.css';
import Bannar from './components/Bannar/Bannar';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Popular from './components/Popular/Popular';
import Services from './components/Services/Services';

function App() {
  return (
    <div >
     <Header></Header>
     <Bannar></Bannar>
     <Card></Card>
     <Popular></Popular>
     <Services></Services>
    </div>
  );
}

export default App;
