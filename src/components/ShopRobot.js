import coin from '../assets/coin.png'

const ShopRobot = ({ shopRobot, onBuy, coins, click }) => {
    return (
        <div className='shop-robot'>
            <div className="shop-robot-name">
                <span>{shopRobot.robotName}</span>
                <span className='shop-level'>{"Lv. " + shopRobot.currentLevel}</span>
            </div>
            <div className='shop-robot-img'>
                <img src={shopRobot.image} alt={shopRobot.robotName} />
            </div>
            <div className='buy-btn'>
                <input type='button' value='Buy' onClick={() => {onBuy(shopRobot.id, shopRobot.price); click();}}></input>
            </div>
            <div className='shop-price'>
                <img src={coin} alt='Coin' /> &nbsp;{shopRobot.price}
            </div>
            { shopRobot.price > coins?
            <div className='shop-disabled'>not enough coins</div> : <></>
            }
            
        </div>
    )
}

export default ShopRobot