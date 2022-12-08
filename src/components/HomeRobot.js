import robotBg from '../assets/home-robot-box.png'

const HomeRobot = ({ robots }) => {
  return (
    <div className='home-robot'>
        <img src={robotBg} className='robot-bg'/>
        <div>
            <div className='img'>
                <img src={robots.image} alt={robots.robotName} />
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
//   return (
//     <>
//     {robots.map((robot)=>(
//       <Robot key ={robot.id} robot={robot} onRemove={removeRobot}/>
//     ))}
//     </>
  )
}

export default HomeRobot