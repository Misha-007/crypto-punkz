import MainMenuButtons from './MainMenuButtons.js'
import logo from '../assets/logo.png'

const MainMenu = () => {
    return (
        <div className='main'>
            <div className='logo'>
                <img src={logo} alt='Cryptopunkz Logo'></img>
            </div>
            <MainMenuButtons />
        </div>
    )
}

export default MainMenu