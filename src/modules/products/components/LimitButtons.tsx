import React from 'react'

const DEFAULT_VALUES = [8, 16, 20]

interface Props {
  values?: number[];
  onChange: (value: number) => void;
}

export default function LimitButtons(props: Props) {
  const { values = DEFAULT_VALUES, onChange } = props;
  return (
    <div className='items-center flex justify-end'>
      {values.map(limit => (
        <button 
          key={limit}
          onClick={() => onChange(limit)}
          className='ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
        >
          {limit}
        </button>  
      ))}
    </div>
  )
}
