
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/pages/Inicio'
import Contacto from './components/pages/Contacto'
import Redes from './components/pages/Redes'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/contacto' component={Contacto}/>
          <Route path='/redes' component={Redes}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
