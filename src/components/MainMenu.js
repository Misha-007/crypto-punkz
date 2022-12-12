import MainMenuButtons from './MainMenuButtons.js'
import Settings from './Settings.js'
import logo from '../assets/logo.png'
import { useState } from 'react'

const MainMenu = ({volume, setVolume}) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    return (
        <div className='main'>
            <div className='logo'>
                <img src={logo} alt='Cryptopunkz Logo'></img>
            </div>
            <MainMenuButtons setIsSettingsOpen={setIsSettingsOpen}/>
            {isSettingsOpen && <Settings setIsSettingsOpen={setIsSettingsOpen} volume={volume} setVolume={setVolume} />}
        </div>
    )
}

export default MainMenu