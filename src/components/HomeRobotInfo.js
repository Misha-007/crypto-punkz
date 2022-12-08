import infoBg from '../assets/robot-info-box.png'
import coin from '../assets/coin.png'

const HomeRobotInfo = ({ robot }) => {
  return (
    <div className='info-container'>
        <img src={infoBg} alt="" />
        <div className='info-box'>
            <div className='info-img'>
                <img src={robot.image} alt={robot.robotName} />
            </div>
            <div className='info'>
                <h2>{robot.robotName + ' [Lv. ' + robot.currentLevel + ']'}</h2>
                <div>
                    <span>Level: {robot.currentLevel}</span>
                    <span className='sell-for'>Sells for:&nbsp;<img src={coin} alt="" /> {robot.price}</span>
                </div>
                <p>{robot.description}</p>
            </div>
        </div>
    </div>
  )
}

export default HomeRobotInfo