/*
 * @Description: 
 * @Author: 刘宝顺
 * @Date: 2024-05-22 17:54:35
 * @LastEditTime: 2024-05-22 18:13:57
 * @LastEditors: 刘宝顺
 */
import {useRef} from 'react';
import { View, Text, Image, Canvas } from '@tarojs/components';
import Taro, { useLoad, useUnload } from '@tarojs/taro'

import './index.scss'

export default function Index() {
    const timer = useRef(0);
    const point = {
        x: Math.random() * 295,
        y: Math.random() * 295,
        dx: Math.random() * 5,
        dy: Math.random() * 5,
        r: Math.round(Math.random() * 255 | 0),
        g: Math.round(Math.random() * 255 | 0),
        b: Math.round(Math.random() * 255 | 0),
    };
  useLoad(() => {
    console.log('Page loaded.')
    timer.current = setInterval(draw, 17);
  })
  useUnload(() => {
    clearInterval(timer.current)
  })
  const draw = () => {
    var ctx = my.createCanvasContext('canvas');
    ctx.setFillStyle('#FFF');
    ctx.fillRect(0, 0, 305, 305);

    ctx.beginPath();
    ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
    ctx.setFillStyle("rgb(" + point.r + ", " + point.g + ", " + point.b + ")");
    ctx.fill();
    ctx.draw();

    point.x += point.dx;
    point.y += point.dy;
    if (point.x <= 5 || point.x >= 295) {
      point.dx = -point.dx;
      point.r = Math.round(Math.random() * 255 | 0);
      point.g = Math.round(Math.random() * 255 | 0);
      point.b = Math.round(Math.random() * 255 | 0);
    }

    if (point.y <= 5 || point.y >= 295) {
      point.dy = -point.dy;
      point.r = Math.round(Math.random() * 255 | 0);
      point.g = Math.round(Math.random() * 255 | 0);
      point.b = Math.round(Math.random() * 255 | 0);
    }
  }
  return (
    <View className='index' style={{backgroundColor: '#f3f3f3'}}>
        <View>
            <Text>Hello world!</Text>
        </View>
        <Canvas id="canvas" type="2d" className="manual-control__content-canvas-swift" width='300' height='300' disableScroll style={{ width: '300px', height: '300px' }} />
    </View>
  )
}
