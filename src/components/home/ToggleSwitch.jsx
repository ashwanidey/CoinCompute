import React, { useState } from 'react'

const Switcher4 = ({handleCheckboxChange,isChecked}) => {
  

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative mb-3'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? 'bg-[#02146A]' : 'bg-black'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default Switcher4
