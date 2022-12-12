import { Link } from 'react-router-dom';

const MainMenuButtons = ({ setIsSettingsOpen, setIsHelpOpen, click }) => {
    return (
        <div className='buttons'>
            <Link to='/home'><input type='button' value='Play' onClick={click}></input></Link>
            <input type='button' value='Help' onClick={() => {setIsHelpOpen(true); click();}}></input>
            <input type='button' value='Settings' onClick={() => {setIsSettingsOpen(true); click();}}></input>
        </div>
    )
}

export default MainMenuButtons