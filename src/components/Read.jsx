import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Read = () => {
  const basmala = 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیم'
  const [text, setText] = useState('');
  const [surah, setSurah] = useState('');
  const [surahNum, setSurahNum] = useState(1);
  const [ayahs, setAyahs] = useState([]);
  const ayahElements = [];
  const [length, setLength] = useState(0);

  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNum}`);
      console.log(response.data);

      if (response.data.data.ayahs.length > 0) {
        setLength(response.data.data.ayahs.length);
        // response.data.data.ayahs.shift()
        setSurah(response.data.data.name)
        setAyahs(response.data.data.ayahs);
        setText(response.data.data.ayahs[0].text.slice(basmala.length))
        console.log(text);
        console.log(ayahs);

      }
    } catch (error) {
      console.log(error);
    }
  };

  // Use a loop to display all ayahs
  const renderAllAyahs = () => {
    // ayahs.unshift(text)
    for (let i = 0; i < length; i++) {
      ayahElements.push(
        <p key={i} className='ayah'>
          {ayahs[i].text} <span className='sep'>{i + 1}</span>
        </p>
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
        <button className='searchBtn' onClick={getData}>search</button>
      </div>
        <p className='basmala'>
          {surah && surah}
        </p>
      <div className='ayatCont'>
        {renderAllAyahs()}
      </div>
    </div>
  );
}

export default Read
