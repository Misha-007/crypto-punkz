import HomeHeader from './HomeHeader.js'
import HomeRobot from './HomeRobot'
import HomeRobotInfo from './HomeRobotInfo'
import Shop from './Shop.js'
import Avatars from './Avatars.js'
import { useState, useEffect } from 'react'
import {robots as defaultRobots} from './dataRobots.js'
import sadRobot from '../assets/sad-robot.png'
import {avatars as defaultAvatars} from './dataAvatars.js'

const Home = () => {
    // Constants
    const TIME = 15000; // update robot every 2 seconds
    const PRICE_RATE = 0.05; // 5% growth in price

    // total coins
    const [coins, setCoins] = useState(0)

    //List of owned robots
    const [robots, setRobots] = useState(defaultRobots.slice(0,6)) // Robots 1 - 6
    //list of avatars
    const[avatars,setAvatars]=useState(defaultAvatars)
    //selected avatar
    const [selected,setSelected]=useState(
        {
            id: 1,
            image: require('../assets/avatar.png'),
        }
    )
    const selectedAvatar = (id) =>{
        const avatar = avatars.find(x => x.id === id)
        setSelected(avatar)
    }
    const [isModal, setIsModal] = useState(false)
    //selected robot
    const [robotInfo, setRobotInfo] = useState(
        {
            id: 1,
            robotName: "Arachnidroid",
            image: require('../assets/rob1.gif'),
            description: "A sleek, advanced robot designed for speed and agility",
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
    const buyRobot = (id, price) =>{
        if (price <= coins) {
            setCoins(coins - price)
            setShopRobots(shopRobots.filter((shopRobot) => shopRobot.id !== id ))
            const newRobot = shopRobots.find(x => x.id === id)
            setRobots([...robots,newRobot])
        } else {
            console.log('not enough coins')
        }
        
    }

    const growOne = (robot, id) => {
        const newRobot = robot
        
        if (newRobot.id === id) {
            newRobot.price = Math.ceil(newRobot.price*(1+PRICE_RATE));
            newRobot.currentLevel = ++ newRobot.currentLevel;
        }
        
        return newRobot;
    }

    // updated robot
    const upgradeRobot = (id) => {
    
        setRobots(robots.map(
            function(robot) {return growOne(robot, id)}
            )
        )

        setRobotInfo(
            robots.find( robot => robot.id === id)
        )

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
            <HomeHeader setIsOpen={setIsOpen} coins={coins} selected={selected} setIsModal={setIsModal}/>
            <div className='home-container'>
                { robots.length > 0 ?
                <div className='robot-container'>
                    {robots.map((robot) => (
                        <HomeRobot key={robot.id} robot={robot} onRemove={sellRobot} onToggle={selectRobot} onUpgrade={upgradeRobot} />
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
            {isOpen && <Shop setIsOpen={setIsOpen} shopRobots={shopRobots} onBuy={buyRobot} coins={coins} setShopRobots={setShopRobots}/>}
            {isModal && <Avatars setIsModal={setIsModal} avatars={avatars} selectedAvatar={selectedAvatar}/>}
        </div>
    )
}

export default Home