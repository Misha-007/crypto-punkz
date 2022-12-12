import banner from '../assets/help-banner.png'
import helpBg from '../assets/shop-modal-bg.png'

const Help = ({ setIsHelpOpen }) => { 
    return (
        <div>
            <div className='dark-bg'  onClick={() => setIsHelpOpen(false)}></div>
            <div className='help-modal'>
                <img src={helpBg} className='help-bg' alt='help Modal Background' />
                <div className='help-container'>
                <div className='help-text'>
                    <h2>What is CRYPTOPUNKZ?</h2>
                    <p>
                        Welcome to the world of robots! CRYPTOPUNKZ is an NFT game set in a dystopian world ruled by robots. You must raise your cyber army in order to protect your own land. Level them up to make them stronger!
                    </p>
                    <h2>How to play?</h2>
                    
                        <ol>
                            <li>After clicking play, it will take you to your own army of robots.</li>
                            <li>There are different kinds of robots that you can own, each their with unique design.</li>
                            <li>Each one also has their own level that increases over time.</li>
                            <li>However, you can use your coins to level-up a robot immediately by clicking the upgrade button.</li>
                            <li>To earn more coins, you can sell some of your robots to the shop by clicking the sell button. The higher the level, the higher the selling price.</li>
                            <li>To view the robot details, you can click the information button. This will display the details in the right side.</li>
                            <li>You can also go to shop by clicking the shop button in the header. This will open a shop where you can buy more robots.</li>
                            <li>Moreover, you can change your avatar. Just click the profile icon in the header to open the profiles modal where you can choose an avatar to yoour liking.</li>
                        </ol>
                    
                </div>
                </div>
                <img src={banner} className='help-banner' alt='Help Banner' />
                <input type="button" className='close-btn' onClick={() => setIsHelpOpen(false)}/>
            </div>
        </div>
    )
}

export default Help