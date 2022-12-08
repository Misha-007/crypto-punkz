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
    const [isOpen, setIsOpen] = useState(false)
    //Sell robot
    const sellRobot = (id) => {
        setRobots(robots.filter((robot) => robot.id !== id))
    }
    //Set selected robot
    const selectRobot = (id) => {
        let info = robots.find(x => x.id === id)
        setRobotInfo(info)
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
            {isOpen && <Shop setIsOpen={setIsOpen}/>}
        </div>
    )
}

export default Home