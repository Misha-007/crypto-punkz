import banner from '../assets/settings-banner.png'
import settingsBG from '../assets/small-modal-bg.png'

const Settings = ({ setIsSettingsOpen, volume, setVolume, sfxVolume, setSfxVolume, click }) => {
    return (
        <div>
            <div className='dark-bg'  onClick={() => setIsSettingsOpen(false)}></div>
            <div className='settings-modal'>
                <img src={settingsBG} className='settings-bg' alt='Settings Modal Background' />
                <div className='settings-container'>

                    <span>Music</span>
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

                    <span>Sounds</span>
                    <div className='slider'>
                        <input
                            type='range'
                            min='0'
                            max='1'
                            step='.05'
                            value={sfxVolume}
                            onChange={e => setSfxVolume(parseFloat(e.target.value))}
                        />
                        <div><span>{parseInt(sfxVolume * 100)}</span></div>
                    </div>

                </div>
                <img src={banner} className='settings-banner' alt='settings Banner' />
                <input type='button' className='close-btn' onClick={() => {setIsSettingsOpen(false); click();}}/>
            </div>
        </div>
    )
}

export default Settings