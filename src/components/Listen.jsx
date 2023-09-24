import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

const Listen = () => {
  const [surah, setSurah] = useState('');
  const [surahNum, setSurahNum] = useState(1);
  const [ayahs, setAyahs] = useState([]);
  const [length, setLength] = useState(0);
  const audioRefs = useRef([]); // Ref to store audio elements

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNum}/ar.alafasy`);
      console.log(response.data);

      if (response.data.data.ayahs.length > 0) {
        const ayahsData = response.data.data.ayahs;
        setLength(ayahsData.length);
        setSurah(response.data.data.name);
        setAyahs(ayahsData);
        audioRefs.current = new Array(ayahsData.length).fill(null); // Initialize audioRefs array
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAudioEnded = (index) => {
    if (index < length - 1) {
      // Play the next audio if it exists
      audioRefs.current[index + 1].play();
    }
  };

  const renderAllAyahs = () => {
    const ayahElements = [];
    for (let i = 0; i < length; i++) {
      ayahElements.push(
        <span key={i} className='audioData'>
            اية رقم {i + 1}
            <audio
              style={{marginLeft: 10, userSelect: 'none'}}
              controls
              src={ayahs[i].audio}
              ref={(audio) => (audioRefs.current[i] = audio)} // Store reference to audio element
              onEnded={() => handleAudioEnded(i)}
              autoPlay={i === 0} // Auto-play the first audio
            />
        </span>
      );
    }
    return ayahElements;
  };

  return (
    <div className='cont'>
      <div className='searchCont'>
        <input
          className='searchInput'
          type="text"
          placeholder='أدخل رقم السورة'
          onChange={(e) => {
            setSurahNum(e.target.value);
          }}
        />
        <button className='searchBtn' onClick={getData}>
          Search
        </button>
      </div>
      <p className='basmala'>{surah && surah}</p>
      <div className='audio'>{renderAllAyahs()}</div>
    </div>
  );
};

export default Listen;
