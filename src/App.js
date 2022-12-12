import MainMenu from './components/MainMenu.js'
import Home from './components/Home.js'
import ReactHowler from 'react-howler'
import music from './assets/music.mp3'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import useSound from 'use-sound'
import clickSfx from './assets/click.wav'
import levelUpSfx from './assets/level-up.wav'
import errorSfx from './assets/error.wav'

function App() {
    const [ volume, setVolume ] = useState(0.5)
    const [ sfxVolume, setSfxVolume ] = useState(0.5)
    const [ click ] = useSound(clickSfx, {volume: sfxVolume})
    const [ levelUp ] = useSound(levelUpSfx, {volume: sfxVolume})
    const [ error ] = useSound(errorSfx, {volume: sfxVolume})

    return (
        <Router>
        <ReactHowler
        src={music}
        playing={true}
        loop={true}
        volume={volume}/>
            <div className='app'>
                <Routes>
                    <Route exact path='/' element={< MainMenu volume={volume} setVolume={setVolume} sfxVolume={sfxVolume} setSfxVolume={setSfxVolume} click={click}/>}></Route>
                    <Route exact path='/home' element={< Home click={click} levelUp={levelUp} error={error}/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;