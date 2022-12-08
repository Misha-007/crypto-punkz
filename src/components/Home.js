import HomeHeader from './HomeHeader.js'
import HomeRobot from './HomeRobot'
import HomeRobotInfo from './HomeRobotInfo'
import robot1 from '../assets/rob1.gif'

const Home = () => {
    const robot = {
        robotName: 'Robot 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi massa, finibus quis lobortis vel, ullamcorper ac neque. Quisque pellentesque, tellus laoreet porttitor varius, est lectus imperdiet sem, a porta est velit ut ipsum. Integer pharetra tempus libero eget blandit. Nulla quis est non risus facilisis euismod at a augue. Maecenas pulvinar diam eu gravida tincidunt. Nulla vitae tortor non ipsum vehicula luctus blandit in dui. Ut velit erat, malesuada vel ullamcorper a, pulvinar quis felis. Donec imperdiet urna ut ante aliquet, id aliquet dolor elementum. Praesent at elementum sapien.',
        imagePath: robot1,
        currentLevel: 1,
        sellingPrice: 100	
    }
    return (
      <div className='home'>
        <HomeHeader />
        <div className='home-container'>
            <div className='robot-container'>
                {/* make this a loop */}
                <HomeRobot robot={robot}/>
                <HomeRobot robot={robot}/>
                <HomeRobot robot={robot}/>
                <HomeRobot robot={robot}/>
                <HomeRobot robot={robot}/>
                <HomeRobot robot={robot}/>
            </div>
            <HomeRobotInfo robot={robot}/>
        </div>
      </div>
    )
}
  
export default Home