import Registerjs from './Components/Registerpage/Register/Registerjs';
import Categoryjs from './Components/Categorypage/Categoryjs';
import { Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    
    <Routes>
      <Route exact path='/register' element={<Registerjs/>} />
      <Route exact path='/select-cateogry' element={<Categoryjs/>}/>
    </Routes>

  );
}

export default App;
