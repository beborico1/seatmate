import { Route, Routes } from 'react-router-dom';
import './App.css';
import Event from './pages/Event';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <div className='p-5 h-screen bg-gray-100'>
        <Routes>
          <Route strict exact path="/" element={<Search/>}/>
          <Route strict exact path="/:id" element={<Event/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
