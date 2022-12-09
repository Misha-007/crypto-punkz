import coin from '../assets/coin.png'

const ShopRobot = ({ shopRobot, onBuy }) => {
    return (
        <div className='shop-robot'>
            <div className="shop-robot-name">
                {shopRobot.robotName}
            </div>
            <div className='shop-robot-img'>
                <img src={shopRobot.image} alt={shopRobot.robotName} />
            </div>
            <div className='buy-btn'>
                <input type='button' value='Buy' onClick={() => onBuy(shopRobot.id)}></input>
            </div>
            <div className='shop-price'>
                <img src={coin} alt='Coin' /> &nbsp;{shopRobot.price}
            </div>
        </div>
    )
}

export default ShopRobot