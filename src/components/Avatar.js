const Avatar = ({avatar, selectedAvatar}) => {
  return (
    <div className='avatar-box'>
        <div className="avatar-name">
            {avatar.id == 1 ? 'Default' : 'Avatar ' + parseInt(avatar.id - 1)}
        </div>
        <div className='avatar-img'>
            <img src={avatar.image} alt={avatar.id} onClick={() => selectedAvatar(avatar.id)}/>
        </div>
        <div className='buy-btn'>
            <input type='button' value='Use' onClick={() => selectedAvatar(avatar.id)}></input>
        </div>
    </div>
  )
}

export default Avatar