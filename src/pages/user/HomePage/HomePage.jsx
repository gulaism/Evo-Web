import React from 'react'
import HomeAbove from '../../../components/HomeAbove/HomeAbove'
import HomeBottom from '../../../components/HomeBottom/HomeBottom'

const HomePage = () => {
  return (
    <div>
      <HomeAbove />
      <div style={{marginBottom: "150px"}}>
        <HomeBottom />
      </div>
    </div>
  );
}

export default HomePage
