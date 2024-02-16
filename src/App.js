import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<HomePage/>}/>
</Routes>
     
    </div>
  );
}

export default App;
