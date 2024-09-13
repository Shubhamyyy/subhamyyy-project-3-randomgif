import React, { useCallback, useEffect, useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const Random = () => {

  const {gif,loading,fetchData}=UseGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center
      gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random gif</h1>

      {
        loading ? (<Spinner></Spinner>):(<img src={gif} className='w-1/3 h-1/3'></img>)
      }
      
      <button onClick={() => fetchData()} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
      
    </div>
  )
}

export default Random;
