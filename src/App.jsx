import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import PokeApi from './ejemplos/PokeApi';
import Nosotros from './ejemplos/hoc/Nosotros';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarAlt } from './components/Navbar/NavbarAlt';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './ejemplos/Error404';

function App() {

  return (
    <BrowserRouter>
        {/* <Routes>
          <Route path='/pokemon' element={<NavbarAlt />}/>
          <Route path='*' element={<Navbar />}/>
        </Routes> */}

        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path='/nosotros' element={ <Nosotros />}/>
          <Route path='/pokemon' element={ <PokeApi />} />
          <Route path='*' element={ <Navigate to={"/"} /> }/>
          {/* <Route path='*' element={ <Error404 /> }/> */}
        </Routes>

        

        {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;
