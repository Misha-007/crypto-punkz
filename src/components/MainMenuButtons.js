import { Link } from 'react-router-dom';

const MainMenuButtons = () => {
  return (
    <div className='buttons'>
        <Link to='/home'><input type='button' value='Play'></input></Link>
        <input type='button' value='Help'></input>
        <input type='button' value='Settings'></input>
    </div>
  )
}

export default MainMenuButtons