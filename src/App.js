
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import Navigation from './components/Navigation';
import Header from './components/Header'
import People from './components/People'
import Planets from './components/Planets';
import Home from './components/Home';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Films from './components/Films';


function App() {
  return (
    <BrowserRouter>
    
    <main className="App">
    <Header />
    <Navigation />
      <Routes>
      <Route path='/' element= {<Home />} />
        <Route path='/People' element= {<People />} />
        <Route path='/Planets' element= {<Planets />} />
        <Route path='/Species' element= {<Species />} />
        <Route path='/Vehicles' element= {<Vehicles />} />
        <Route path='/Starships' element= {<Starships />} />
        <Route path='/Films' element= {<Films />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
