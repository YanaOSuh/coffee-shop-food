import { useState } from 'react';
import { data } from './data';
import './App.css';
import menuBG from './menu-bg.jpg';

function App() {

const [dish, setDish] = useState(0);
const {dishName, dishCompound, price, image} = data[dish];

const previousDish = () => {
  setDish((dish => {
    dish --;
    if (dish < 0) {
      return data.length -1;
    }
    return dish;
  }))
}

const nextDish = () => {
  setDish((dish => {
    dish ++;
    if (dish > data.length -1) {
      dish = 0;
    }
    return dish;
  }))
}

  return (
  <section className='foodSection'>

    <div className='foodSection_image'>
      <img src={menuBG} alt='cup of coffee layout'/>
    </div>

    <div className='foodSection__header'>
      <div className='foodSection__headerContainer'>
        <h2>Order delicious food to go</h2>
        <p>Skip the line</p>
      </div>
    </div>

    <div className='foodContainer'>
      <div className='foodContainer_dishPic'>
        <img src={image} alt='dish' width='300px' />
      </div>
      <div className='container_dishInfo'>
        <h3>{dishName}</h3>
        <p className='container_dishInfo-compound'>{dishCompound}</p>
        <p className='container_dishInfo-price'>{price}</p>
        <button className='container_dishInfo-btn'>+ Add</button>
      </div>
    </div>

      <div className='container_btn'>
        <button onClick={previousDish} className='sliderBtns'>Previous</button>
        <button onClick={nextDish} className='sliderBtns'>Next</button>
      </div>
    </section>
  );
}

export default App;
