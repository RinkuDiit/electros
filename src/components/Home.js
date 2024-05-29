import React from 'react'
import Slider from './Slider'
import Shipp from './Shipp'
import Rahul from './Rahul1'
import Api from './Api';

function Home() {
  return (
    <div>
      <Slider/>
      <Shipp/>
      <div style={{float:'left'}}>
      <Api/>
      </div>
      <Rahul />
    </div>
  )
}

export default Home