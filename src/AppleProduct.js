import './AppleProduct.css'
import React from 'react'
import { useState } from 'react';

import iphone from './svg/iphone.svg';
import ipad from './svg/ipad.svg';
import watch from './svg/watch.svg';
import imac from './svg/imac.svg';
import macbook from './svg/macbook.svg';
import airpods from './svg/airpods.svg';
import heart from './svg/heart.svg'

const mapaSVG = {
  iphone, ipad, watch, imac, macbook, airpods
};

export function AppleProduct( props ) {

  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className='apple-product' onClick={handleClick}>
      <img className='product' 
        alt="producto" 
        src={mapaSVG[props.type]} 
        width={200} />
      <img className='heart' 
        alt="heart" src={heart} 
        style={{ width:10 + 10*clicks + 'px'}}/>
    </div>
  )
};
