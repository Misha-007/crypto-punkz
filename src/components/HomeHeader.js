import logo from '../assets/logo.png'
import coinBar from '../assets/coin-bar.png'
import avatar from '../assets/avatar.png'

const HomeHeader = ({ setIsOpen, coins }) => {
    return (
        <div className='header'>
            <img src={logo} className='logo' alt='Cryptopunkz Logo' />
            <div className='header-info'>
                <div className='coin-bar'>
                    <img src={coinBar} alt='Coins' />
                    <span>{coins}</span>
                </div>
                <input type="button" className='shop-btn' onClick={() => setIsOpen(true)}/>
                <img src={avatar} className='avatar' alt='Cryptopunkz Logo' />
            </div>
        </div>
    )
}

export default HomeHeader