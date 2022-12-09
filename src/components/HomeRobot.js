import robotBg from '../assets/home-robot-box.png'

const HomeRobot = ({ robot, onUpgrade, onRemove, onToggle }) => {
    return (
        <div className='home-robot'>
            <img src={robotBg} className='robot-bg' alt='Robot Box Background'/>
            <div>
                <div className='img'>
                    <img src={robot.image} alt={robot.robotName} />
                </div>
                <div className='round-btn'>
                    <input type='button' className='upgrade-btn' onClick={() => onUpgrade(robot.id)}></input>
                    <input type='button' className='info-btn' onClick={() => onToggle(robot.id)}></input>
                </div>
                <div className='sell-btn'>
                    <input type='button' value='Sell' onClick={() => onRemove(robot.id)}></input>
                </div>
                <div className='timer'>
                    <span>01:00</span>
                </div>
            </div>
        </div>
    )
}

export default HomeRobot