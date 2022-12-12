import dialogBG from '../assets/small-modal-bg.png'
import sadRobot from '../assets/sad-robot.png'

const DialogModal = ({ setIsOpenDialog, click }) => {
    return (
        <div>
            <div className='dark-bg'  onClick={() => setIsOpenDialog(false)}></div>
            <div className='dialog-modal'>
                <img src={dialogBG} className='dialog-bg' alt='dialog Modal Background' />
                <div className='dialog-container'>
                    <img src={sadRobot} alt='Sad Robot' />
                    <h2>You don't have enough coins!</h2>
                </div>
                <input type='button' className='close-btn' onClick={() => {setIsOpenDialog(false); click();}}/>
            </div>
        </div>
    )
}

export default DialogModal