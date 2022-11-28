import logo from './logo.svg';
import './App.css';
import Home from './component/Home.js'
import Header from './component/Header';
import MainContainer from './component/MainContainer';

function App() {
  return (
    <>
    <div className="App">
      <Home/>
      
    </div>
    <div className="App"><Header/></div>
    <div> <MainContainer/></div>
    
    </>
  );
}

export default App;
