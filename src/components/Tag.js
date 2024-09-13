import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const [tag,setTag]=useState('');

  const {gif,loading,fetchData}=UseGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center
      gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} gif</h1>

      {
        loading ? (<Spinner></Spinner>):(<img src={gif} className='w-1/3 h-1/3'></img>)
      }
      
      <input className='w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center'
       onChange={(event) => setTag(event.target.value)}
       value={tag}>
      </input>
      <button onClick={() => fetchData(tag)} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
      
    </div>
  )
}

export default Tag;
