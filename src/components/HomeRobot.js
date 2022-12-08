import { useState } from "react"
import Robot from './Robot.js'
const HomeRobot = () => {
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
    <>
    {robots.map((robot)=>(
      <Robot key ={robot.id} robot={robot} onRemove={removeRobot}/>
    ))}
    </>
  )
}

export default HomeRobot