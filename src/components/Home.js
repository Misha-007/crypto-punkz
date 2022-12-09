import HomeHeader from './HomeHeader.js'
import HomeRobot from './HomeRobot'
import HomeRobotInfo from './HomeRobotInfo'
import Shop from './Shop.js'
import { useState } from 'react'

const Home = () => {
    //List of owned robots
    const [robots, setRobots] = useState([
        {
            id: 1,
            robotName: "Robot 1",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 2,
            robotName: "Robot 2",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 3,
            robotName: "Robot 3",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 4,
            robotName: "Robot 4",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 5,
            robotName: "Robot 5",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 6,
            robotName: "Robot 6",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
    ])
    //selected robot
    const [robotInfo, setRobotInfo] = useState(robots[0])
    //shop robot
    const [shopRobots, setShopRobots]=useState([
        {
            id: 7,
            robotName: "Robot 7",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 8,
            robotName: "Robot 8",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 9,
            robotName: "Robot 9",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 10,
            robotName: "Robot 10",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 11,
            robotName: "Robot 11",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 12,
            robotName: "Robot 12",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        }
    ])
    const [isOpen, setIsOpen] = useState(false)
    //Sell robot 
    const sellRobot = (id) => {
        setRobots(robots.filter((robot) => robot.id !== id))
        const oldRobot = robots.find(x => x.id === id)
        setShopRobots([...shopRobots,oldRobot])
        if (robots.length > 1) {
            setRobotInfo(robots[0]) 
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