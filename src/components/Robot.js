import Button from './Button.js'
const Robot = ({robot,onRemove}) => {
  return (
    <div>
        <img src={robot.image} alt=""></img>
        <h3>{robot.robotName}</h3>
        <p>{robot.description}</p>
        <h3>{robot.currentLevel}</h3>
        <h3>{robot.price}</h3>
        <Button text="Remove" onClick={() => onRemove(robot.id)}/>
    </div>
  )
}

export default Robot