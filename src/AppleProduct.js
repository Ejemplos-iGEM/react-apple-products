import React from 'react'

import iphone from './svg/iphone.svg';
import ipad from './svg/ipad.svg';
import watch from './svg/watch.svg';
import imac from './svg/imac.svg';
import macbook from './svg/macbook.svg';
import airpods from './svg/airpods.svg';

const mapaSVG = {
  iphone, ipad, watch, imac, macbook, airpods
};

export function AppleProduct( props ) {
  return (
    <div>
      Producto {props.type}
      <img alt="producto" src={mapaSVG[props.type]} width={200} />
    </div>
  )
}
