import Avatar from './Avatar.js'
import banner from '../assets/Profile-banner.png'
import shopBg from '../assets/shop-modal-bg.png'

const Avatars = ({setIsModal,avatars,selectedAvatar}) => {
  return (
    <div>
        <div className='dark-bg'  onClick={() => setIsModal(false)}></div>
            <div className='shop-modal'>
                <img src={shopBg} className='shop-bg' alt='Shop Modal Background' />
                <div className='shop-container'>
                    {avatars.map((avatar) => (
                        <Avatar key={avatar.id} avatar={avatar} selectedAvatar={selectedAvatar}/>
                    ))}
                </div>
            <img src={banner} className='shop-banner' alt='SHop Banner' />
            <input type="button" className='close-btn' onClick={() => setIsModal(false)}/>
        </div>
    </div>
  )
}

export default Avatars