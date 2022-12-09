import HomeHeader from './HomeHeader.js'
import HomeRobot from './HomeRobot'
import HomeRobotInfo from './HomeRobotInfo'
import Shop from './Shop.js'
import { useState } from 'react'
import {robots as defaultRobots} from './robots.js'

const Home = () => {
    //List of owned robots
    const [robots, setRobots] = useState(defaultRobots.slice(0,7)) // Robots 1 - 6
    //selected robot
    const [robotInfo, setRobotInfo] = useState(robots[0])
    //shop robot
    const [shopRobots, setShopRobots]=useState(defaultRobots.slice(7,13)) // robots 7 - 12
    const [isOpen, setIsOpen] = useState(false)
    //Sell robot 
    const sellRobot = (id) => {
        setRobots(robots.filter((robot) => robot.id !== id))
        const oldRobot = robots.find(x => x.id === id)
        setShopRobots([...shopRobots,oldRobot])
        if (robots.length > 1) {
            setRobotInfo(robots[1]) 
        } else {
            setRobotInfo({
                    id: null,
                    robotName: null,
                    image: null,
                    description: "No robots at home. Quick! Purchase one!",
                    currentLevel: 0,
                    price: 0
                })
        }
    }
    //Set selected robot
    const selectRobot = (id) => {
        const info = robots.find(x => x.id === id)
        setRobotInfo(info)
    }
    //Buy robot
    const buyRobot = (id) =>{
        setShopRobots(shopRobots.filter((shopRobot) => shopRobot.id !== id ))
        const newRobot = shopRobots.find(x => x.id === id)
        setRobots([...robots,newRobot])
        setRobotInfo(newRobot)
        console.log("hello", id)
    }
    return (
        <div className='home'>    
            <HomeHeader setIsOpen={setIsOpen}/>
            <div className='home-container'>
                <div className='robot-container'>
                    {robots.map((robot) => (
                        <HomeRobot key={robot.id} robot={robot} onRemove={sellRobot} onToggle={selectRobot} />
                    ))}
                </div>
                <HomeRobotInfo robotInfo={robotInfo} />
            </div>
            {isOpen && <Shop setIsOpen={setIsOpen} shopRobots={shopRobots} onBuy={buyRobot}/>}
        </div>
    )
}

export default Home