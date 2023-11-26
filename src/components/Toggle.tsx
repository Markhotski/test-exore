import React from 'react'

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
  labels: string[];
}

export default function Toggle(props: Props) {
  const {checked, onChange, labels} = props;

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }
  
  return (
    <label className='inline-flex cursor-pointer items-center justify-center rounded-md bg-white p-1 border-2'>
      <input
        type='checkbox'
        className='sr-only'
        checked={checked}
        onChange={handleChage}
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          !checked ? 'text-white bg-gray-500' : 'text-body-color'
        }`}
      >
        {labels[0]}
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          checked ? 'text-white bg-gray-500' : 'text-body-color'
        }`}
      >
        {labels[1]}
      </span>
    </label>
  )
}