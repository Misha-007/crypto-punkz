import ShopRobot from './ShopRobot.js'
import banner from '../assets/shop-banner.png'
import shopBg from '../assets/shop-modal-bg.png'

const Shop = ({ setIsOpen }) => {
    const shopRobots = [
        {
            id: 1,
            robotName: "Robot 1",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 2,
            robotName: "Robot 2",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 3,
            robotName: "Robot 3",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 4,
            robotName: "Robot 4",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 5,
            robotName: "Robot 5",
            image: require('../assets/rob1.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        },
        {
            id: 6,
            robotName: "Robot 6",
            image: require('../assets/rob2.gif'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            currentLevel: 1,
            price: 100
        }
    ]
    return (
        <div>
            <div className='dark-bg'  onClick={() => setIsOpen(false)}></div>
            <div className='shop-modal'>
                <img src={shopBg} className='shop-bg' alt='Shop Modal Background' />
                <div className='shop-container'>
                    {shopRobots.map((shopRobot) => (
                        <ShopRobot key={shopRobot.id} shopRobot={shopRobot}/>
                    ))}
                </div>
                <img src={banner} className='shop-banner' alt='SHop Banner' />
                <input type="button" className='close-btn' onClick={() => setIsOpen(false)}/>
            </div>
        </div>
    )
}

export default Shop