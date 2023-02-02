
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
import InfoCard from './components/InfoCard';


function App() {
  return (
    <BrowserRouter>
    
    <main className="App">
    <Header />
    <Navigation />
      <Routes>
      <Route path='/' element= {<Home />} />
        <Route path='People' element= {<People />}>
        <Route path='InfoCard' element= {<InfoCard />} />
        </Route>
        <Route path='Planets' element= {<Planets />} >
        <Route path='InfoCard' element= {<InfoCard />} />
        </Route>
        <Route path='Species' element= {<Species />} >
        <Route path='InfoCard' element= {<InfoCard />} />
        </Route>
        <Route path='Vehicles' element= {<Vehicles />} >
        <Route path='InfoCard' element= {<InfoCard />} />
        </Route>
        <Route path='Starships' element= {<Starships />} >
        <Route path='InfoCard' element= {<InfoCard />} />
        </Route>
        <Route path='Films' element= {<Films />} >
        <Route path='InfoCard' element= {<InfoCard />} />
        </Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
