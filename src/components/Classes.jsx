import React from 'react';
import { CLASS_LIST } from '../consts';


export default function Classes({changeFunction}) {
  return (
    <div className='skill-options-div small'>
      <p className='title'>Classes</p>
      <div>
        {
          Object.keys(CLASS_LIST).map((item) => (
            <p key={item} role='button' onClick={()=> changeFunction(item) }>{item}</p> 
          ))
        }
      </div>
    </div>
  )
}
