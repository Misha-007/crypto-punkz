import robotBg from '../assets/home-robot-box.png'

const HomeRobot = ({ robot }) => {
  return (
    <div className='home-robot'>
        <img src={robotBg} className='robot-bg'/>
        <div>
            <div className='img'>
                <img src={robot.imagePath} alt={robot.robotName} />
            </div>
            <div className='round-btn'>
                <input type='button' className='upgrade-btn'></input>
                <input type='button' className='info-btn'></input>
            </div>
            <div className='sell-btn'>
                <input type='button' value='Sell'></input>
            </div>
            <div className='timer'>
                <span>01:00</span>
            </div>
        </div>
    </div>
  )
}

export default HomeRobot