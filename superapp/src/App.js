import Registerjs from './Components/Registerpage/Register/Registerjs';
import Categoryjs from './Components/Categorypage/Category/Categoryjs';
import { Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    
    <Routes>
      <Route exact path='/register' element={<Registerjs/>} />
      <Route exact path='/select-category' element={<Categoryjs/>}/>
      <Route exact path='/' element={<Registerjs/>}/>
    </Routes>

  );
}

export default App;
