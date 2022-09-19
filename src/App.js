import './App.css';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <div className="App">
        <NavBar/>
      </div>
      <Routes>
        <Route path="/publish/feed" element={<Feed/>} />
      </Routes>
    </div>
  );
}

export default App;
