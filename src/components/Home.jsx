import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import IMG from '../assets/holyquran.png';

const Home = () => {
  return (
    <div className='cont'>
      <img src={IMG} style={{ width: 'fit-content', height: 'fit-content', borderRadius: '10%' }} alt="" />
      <div className='cont2'>
        {/* Replace <a> tags with <Link> components */}
        <Link to='/read' className='link'>
          Read the Quran
        </Link>
        <Link to='/listen' className='link'>
          Listen to the Quran
        </Link>
      </div>
    </div>
  );
};

export default Home;
