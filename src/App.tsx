import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DropList } from './components/DropList/DropList'
import { Rating } from './components/Rating/Rating'
import { OnOff } from './components/OnOff/OnOff';

// alert('Let start')

function App() {
  return (
    <div>
      <h1><AppTitle value={'Best processors in 2021'} /></h1>
      <DropList
        nameOf={'AMD processors'}
        collapsed={false}
        one={'Ryzen 3'}
        two={'Ryzen 5'}
        three={'Ryzen 7'}
        four={'Ryzen ThreadRipper'}
        five={'Ryzen X'}
      />
      <Rating value={5} />
      <OnOff status={false} />

      <DropList
        nameOf={'Intel processors'}
        collapsed={false}
        one={'Comet Lake'}
        two={'Ice Lake'}
        three={'Lake Lake'}
        four={'Tiger Lake'}
        five={'Rocket Lake'}
      />
      <Rating value={3} />
      <OnOff status={true} />
    </div>
  );
}

type AppTitlePropsType = {
  value: string
}

function AppTitle(props: AppTitlePropsType) {
  return (
    <React.Fragment>{props.value}</React.Fragment>
  )
}

export default App;