import infoBg from '../assets/robot-info-box.png'
import coin from '../assets/coin.png'

const HomeRobotInfo = ({ robots }) => {
  return (
    <div className='info-container'>
        <img src={infoBg} alt="" />
        <div className='info-box'>
            <div className='info-img'>
                <img src={robots.image} alt={robots.robotName} />
            </div>
            <div className='info'>
                <h2>{robots.robotName + ' [Lv. ' + robots.currentLevel + ']'}</h2>
                <div>
                    <span>Level: {robots.currentLevel}</span>
                    <span className='sell-for'>Sells for:&nbsp;<img src={coin} alt="" /> {robots.price}</span>
                </div>
                <p>{robots.description}</p>
            </div>
        </div>
    </div>
  )
}

export default HomeRobotInfo