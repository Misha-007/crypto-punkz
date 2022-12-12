const Avatar = ({avatar, selectedAvatar, click}) => {
  return (
    <div className='avatar-box'>
        <div className="avatar-name">
            {avatar.name}
        </div>
        <div className='avatar-img'>
            <img src={avatar.image} alt={avatar.id}/>
        </div>
        <div className='buy-btn'>
            <input type='button' value='Use' onClick={() => {selectedAvatar(avatar.id); click();}}></input>
        </div>
    </div>
  )
}

export default Avatar