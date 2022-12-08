import HomeHeader from './HomeHeader.js'
import HomeRobot from './HomeRobot'
import HomeRobotInfo from './HomeRobotInfo'
import robot1 from '../assets/rob1.gif'
import { useState } from "react"

const Home = () => {
    const [robots, setRobots] = useState([
        {
          id: 1,
          robotName: "Robot 1",
          image:require('../assets/rob1.gif'),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          currentLevel: 1,
          price: 100
        },
        {
          id: 2,
          robotName: "Robot 2",
          image:require('../assets/rob1.gif'),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          currentLevel: 1,
          price: 100
        },
        {
          id: 3,
          robotName: "Robot 3",
          image:require('../assets/rob1.gif'),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          currentLevel: 1,
          price: 100
        },
        {
          id: 4,
          robotName: "Robot 4",
          image:require('../assets/rob1.gif'),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          currentLevel: 1,
          price: 100
        },
        {
          id: 5,
          robotName: "Robot 5",
          image:require('../assets/rob1.gif'),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          currentLevel: 1,
          price: 100
        },
        {
          id: 6,
          robotName: "Robot 6",
          image:require('../assets/rob1.gif'),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          currentLevel: 1,
          price: 100
        },
      ])
    //Remove Robot
    const removeRobot = (id) =>{
        setRobots(robots.filter((robot) => robot.id !== id))
    }
    return (
      <div className='home'>
        <HomeHeader />
        <div className='home-container'>
            <div className='robot-container'>
                {/* make this a loop */}
                <HomeRobot robots={robots}/>
                <HomeRobot robots={robots}/>
                <HomeRobot robots={robots}/>
                <HomeRobot robots={robots}/>
                <HomeRobot robots={robots}/>
                <HomeRobot robots={robots}/>
            </div>
            <HomeRobotInfo robots={robots}/>
        </div>
      </div>
    )
}
  
export default Home