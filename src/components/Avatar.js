const Avatar = ({avatar, selectedAvatar}) => {
  return (
    <div className='shop-robot'>
        <div className="shop-robot-name">
            {avatar.name}
        </div>
        <div className='shop-robot-img'>
            <img src={avatar.image} alt={avatar.name} onClick={() => selectedAvatar(avatar.id)}/>
        </div>
    </div>
  )
}

export default Avatar