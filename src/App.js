import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <div className='p-5'>
        <Header/>
        <SearchForm/>
      </div>
    </div>
  );
}

export default App;
