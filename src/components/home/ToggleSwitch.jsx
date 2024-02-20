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
            className={`box block h-[24px] w-[44px] rounded-full ${
              isChecked ? 'bg-[#3080E8]' : 'bg-black'
            }`}
          ></div>
          <div
            className={`absolute left-[4px] top-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default Switcher4
