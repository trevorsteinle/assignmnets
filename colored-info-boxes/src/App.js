import React from 'react';
import Boxes from './Boxes'

const randomColor = () => {
  var color = Math.floor(Math.random()*16777215).toString(16);
  return color
}

const box1 = {
  title: 'box1',
  subtitle: 'sub1',
  info: 'info1',
  color: `#${randomColor()}`
}

const box2 = {
  title: 'box2',
  subtitle: 'sub2',
  info: 'info2',
  color: `#${randomColor()}`
}

const box3 = {
  title: 'box3',
  subtitle: 'sub3',
  info: 'info3',
  color: `#${randomColor()}`
}

const box4 = {
  title: 'box4',
  subtitle: 'sub4',
  info: 'info4',
  color: `#${randomColor()}`
}

const box5 = {
  title: 'box5',
  subtitle: 'sub5',
  info: 'info5',
  color: `#${randomColor()}`
}

const box6 = {
  title: 'box6',
  subtitle: 'sub6',
  info: 'info6',
  color: `#${randomColor()}`
}

const box7 = {
  title: 'box7',
  subtitle: 'sub7',
  info: 'info7',
  color: `#${randomColor()}`
}

const box8 = {
  title: 'box8',
  subtitle: 'sub8',
  info: 'info8',
  color: `#${randomColor()}`
}

const box9 = {
  title: 'box9',
  subtitle: 'sub9',
  info: 'info9',
  color: `#${randomColor()}`
}

const box10 = {
  title: 'box10',
  subtitle: 'sub10',
  info: 'info10',
  color: `#${randomColor()}`
}


const App = () => (
  <div>
      <Boxes {...box1}/>
      <Boxes {...box2}/>
      <Boxes {...box3}/>
      <Boxes {...box4}/>
      <Boxes {...box5}/>
      <Boxes {...box6}/>
      <Boxes {...box7}/>
      <Boxes {...box8}/>
      <Boxes {...box9}/>
      <Boxes {...box10}/>
  </div>
)

export default App;
