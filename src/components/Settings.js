import banner from '../assets/settings-banner.png'
import settingsBG from '../assets/small-modal-bg.png'

const Settings = ({ setIsSettingsOpen, volume, setVolume }) => {
    return (
        <div>
            <div className='dark-bg'  onClick={() => setIsSettingsOpen(false)}></div>
            <div className='settings-modal'>
                <img src={settingsBG} className='settings-bg' alt='Settings Modal Background' />
                <div className='settings-container'>
                    <h1>Music Volume:</h1>
                    <div className='slider'>
                        <input
                            type='range'
                            min='0'
                            max='1'
                            step='.05'
                            value={volume}
                            onChange={e => setVolume(parseFloat(e.target.value))}
                        />
                        <div><span>{parseInt(volume * 100)}</span></div>
                    </div>
                </div>
                <img src={banner} className='settings-banner' alt='settings Banner' />
                <input type='button' className='close-btn' onClick={() => setIsSettingsOpen(false)}/>
            </div>
        </div>
    )
}

export default Settings