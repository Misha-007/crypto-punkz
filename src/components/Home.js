import HomeHeader from './HomeHeader.js'
import HomeRobot from './HomeRobot'
import HomeRobotInfo from './HomeRobotInfo'
import Shop from './Shop.js'
import { useState, useEffect } from 'react'
import {robots as defaultRobots} from './dataRobots.js'
import sadRobot from '../assets/sad-robot.png'

const Home = () => {
    // Constants
    const TIME = 2000; // update robot every 2 seconds
    const PRICE_RATE = 0.05; // 5% growth in price

    // total coins
    const [coins, setCoins] = useState(0)

    //List of owned robots
    const [robots, setRobots] = useState(defaultRobots.slice(0,6)) // Robots 1 - 6
    //selected robot
    const [robotInfo, setRobotInfo] = useState(
        {
            id: 1,
            robotName: "Robot 1",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        }
    )
    //shop robot
    const [shopRobots, setShopRobots]=useState(defaultRobots.slice(6,12)) // robots 7 - 12
    const [isOpen, setIsOpen] = useState(false)
    //Sell robot 
    const sellRobot = (id) => {
        
        robots.find(robot => {
            if (robot.id == id) {
                setCoins(coins + robot.price)
            }
        })

        setRobots(robots.filter((robot) => robot.id !== id))
        const oldRobot = robots.find(x => x.id === id)
        setShopRobots([...shopRobots,oldRobot])
        if (robots.length > 1) {
            setRobotInfo(robots.filter((robot) => robot.id !== id)[0]) 
        } else {
            setRobotInfo({
                    id: null,
                    robotName: null,
                    image: null,
                    description: "No robot selected.",
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
        console.log("hello", id)
    }
    const grow = (robot) => {
        robot.price = Math.ceil(robot.price*(1+PRICE_RATE));
        robot.currentLevel = ++ robot.currentLevel;
        return robot;
    }
    // Updates on robots and robotInfo
    useEffect(() => {
        const growth = setInterval(() => {
            // This will run every <TIME>
            if (robots && robotInfo.id) {
                setRobots(robots.map(grow));
                setRobotInfo(robots.find(robot => robot.id === robotInfo.id));
            }
        }, TIME)

        return () => clearInterval(growth)
    }, [robots, robotInfo]);

    return (
        <div className='home'>    
            <HomeHeader setIsOpen={setIsOpen} coins={coins}/>
            <div className='home-container'>
                { robots.length > 0 ?
                <div className='robot-container'>
                    {robots.map((robot) => (
                        <HomeRobot key={robot.id} robot={robot} onRemove={sellRobot} onToggle={selectRobot} />
                    ))}
                </div>
                //when no robots
                : <div className='empty-robot-container'> 
                    <div>
                        <img src={sadRobot} alt='Sad Robot' />
                        <h3>You have no robots yet</h3>
                    </div>
                  </div>}
                <HomeRobotInfo robotInfo={robotInfo} />
            </div>
            {isOpen && <Shop setIsOpen={setIsOpen} shopRobots={shopRobots} onBuy={buyRobot}/>}
        </div>
    )
}

export default Home