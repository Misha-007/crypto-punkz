import infoBg from '../assets/robot-info-box.png'
import coin from '../assets/coin.png'

const HomeRobotInfo = ({ robotInfo }) => {
    return (
        <div className='info-container'>
            <img src={infoBg} alt="" />
            <div className='info-box'>
                <div className='info-img'>
                    <img src={robotInfo.image} alt={robotInfo.robotName} />
                </div>
                <div className='info'>
                    <h2>{robotInfo.robotName}</h2>
                    <div>
                        <span>Level: {robotInfo.currentLevel}</span>
                        <span className='sell-for'>Sells for:&nbsp;<img src={coin} alt='COin' /> {robotInfo.price}</span>
                    </div>
                    <p>{robotInfo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeRobotInfo