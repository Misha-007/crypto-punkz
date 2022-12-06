import Button from './Button.js'
const Navigation = () => {
    const onPlay = () => {
        window.location.href='/Play'
    }
    const onHelp = () => {
        window.location.href='/Help'
    }
    const onSettings = () => {
        window.location.href='/Settings'
    }
  return (
    <div className="navigation">
        <Button text='Play' onClick={onPlay}/>
        <Button text='Help' onClick={onHelp}/>
        <Button text='Settings' onClick={onSettings}/>
    </div>
  )
}

export default Navigation