import MainMenu from './components/MainMenu.js'
import Home from './components/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='app'>
        <Routes>
            <Route exact path='/' element={< MainMenu />}></Route>
            <Route exact path='/home' element={< Home />}></Route>
        </Routes>
        </div>
    </Router>
  );
}

export default App;