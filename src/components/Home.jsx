import React from 'react'
import IMG from '../assets/holyquran.png'

const Home = () => {
  return (
    <div className='cont'>
            <img src={IMG} style={{width: 'fit-content', height: 'fit-content', borderRadius: '10%'}} alt="" />
        <div className='cont2'>
        <a href='/read'  className='link'>
            Read the Quran
        </a>
        <a href='/listen' className='link'>
            Listen to the Quran
        </a>
        </div>
    </div>
  )
}

export default Home