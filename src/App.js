import MainMenu from './components/MainMenu.js'
import Home from './components/Home.js'
import ReactHowler from 'react-howler'
import music from './assets/music.mp3'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
    const [volume, setVolume] = useState(0.5)
    return (
        <Router>
        <ReactHowler
        src={music}
        playing={true}
        loop={true}
        volume={volume}/>
            <div className='app'>
                <Routes>
                    <Route exact path='/' element={< MainMenu volume={volume} setVolume={setVolume}/>}></Route>
                    <Route exact path='/home' element={< Home />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;