import logo from '../assets/logo.png'
import coinBar from '../assets/coin-bar.png'
import { Link } from 'react-router-dom';
const HomeHeader = ({ setIsOpen, coins,selected,setIsModal }) => {
    return (
        <div className='header'>
            <Link to={'/'}>
           <img  src={logo} className='header-logo' alt='Cryptopunkz Logo' />
            </Link>
            <div className='header-info'>
                <div className='coin-bar'>
                    <img src={coinBar} alt='Coins' />
                    <span>{coins}</span>
                </div>
                <input type="button" className='shop-btn' onClick={() => setIsOpen(true)}/>
                <img src={selected.image} className='avatar' alt='Cryptopunkz Logo' onClick={() => setIsModal(true)}/>
            </div>
        </div>
    )
}

export default HomeHeader