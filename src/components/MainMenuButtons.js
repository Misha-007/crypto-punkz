import { Link } from 'react-router-dom';

const MainMenuButtons = ({ setIsSettingsOpen, setIsHelpOpen }) => {
    return (
        <div className='buttons'>
            <Link to='/home'><input type='button' value='Play'></input></Link>
            <input type='button' value='Help' onClick={() => setIsHelpOpen(true)}></input>
            <input type='button' value='Settings' onClick={() => setIsSettingsOpen(true)}></input>
        </div>
    )
}

export default MainMenuButtons