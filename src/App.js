import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <h1>MASAI HOTEL</h1>
     <AllRoutes/>
    </div>
  );
}

export default App;
