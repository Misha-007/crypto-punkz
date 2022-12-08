import robotBg from '../assets/home-robot-box.png'

const HomeRobot = ({ robot,onRemove,onToggle }) => {
  return (
    <div className='home-robot'>
        <img src={robotBg} className='robot-bg'/>
        <div>
            <div className='img'>
                <img src={robot.image} alt={robot.robotName} />
            </div>
            <div className='round-btn'>
                <input type='button' className='upgrade-btn'></input>
                <input type='button' className='info-btn' onClick={() => onToggle(robot.id)}></input>
            </div>
            <div className='sell-btn'>
              <input type='button' value='Sell' onClick={() => onRemove(robot.id)}></input>
                {/* <Button text='Sell' onClick={() => onRemove(robot.id)}/> */}
            </div>
            <div className='timer'>
                <span>01:00</span>
            </div>
        </div>
    </div>
//   return (
//     <>
//     {robots.map((robot)=>(
//       <Robot key ={robot.id} robot={robot} onRemove={removeRobot}/>
//     ))}
//     </>
  )
}

export default HomeRobot