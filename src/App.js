import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Interest from './components/Interest';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/about-me' element = {<AboutMe />} />
          <Route path = "/interest" element = {<Interest />} />
          
        </Routes>

        <div>
          <p>
          <Link to = '/'>Home</Link>
          &nbsp; | &nbsp;
          <Link to = '/about-me'>AboutMyself</Link>
          &nbsp; | &nbsp;
          <Link to = '/interest'>Interest</Link>
          &nbsp; | &nbsp;
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
