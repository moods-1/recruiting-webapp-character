import React from 'react'
import { ATTRIBUTE_LIST } from '../consts'

export default function Attributes() {
  return (
   <div className='skill-options-div'>
         <p className='title'>Attributes</p>
         <div>
           {
            ATTRIBUTE_LIST.map((item) => (
               <p key={item} role='button'>{item}</p> 
             ))
           }
         </div>
       </div>
  )
}
