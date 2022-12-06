import Navigation from "./components/Navigation";
import {Routes,Route} from 'react-router-dom'
import Play from "./components/Play";
import Settings from "./components/Settings";
import Help from "./components/Help"
import {useState} from 'react'
function App() {
  const [showNav,setShowNav] = useState(true)
  return (
    <div className="container">
      {showNav&&<Navigation/>}
      <Routes>
        <Route path="/Play" element={<Play funcNav={setShowNav}/>}/>
        <Route path="/Help" element={<Help funcNav={setShowNav}/>}/>
        <Route path="/Settings" element={<Settings funcNav={setShowNav}/>}/>
      </Routes>
    </div>
  );
}

export default App;
