import MainMenuButtons from './MainMenuButtons.js'
import Settings from './Settings.js'
import Help from './Help.js'
import logo from '../assets/logo.png'
import { useState } from 'react'

const MainMenu = ({volume, setVolume, sfxVolume, setSfxVolume, click}) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
        <div className='main'>
            <div className='logo'>
                <img src={logo} alt='Cryptopunkz Logo'></img>
            </div>
            <MainMenuButtons setIsSettingsOpen={setIsSettingsOpen} setIsHelpOpen={setIsHelpOpen} click={click}/>
            {isSettingsOpen && <Settings setIsSettingsOpen={setIsSettingsOpen} volume={volume} setVolume={setVolume} sfxVolume={sfxVolume} setSfxVolume={setSfxVolume} click={click}/>}
            {isHelpOpen && <Help setIsHelpOpen={setIsHelpOpen} click={click}/>}
        </div>
    )
}

export default MainMenu