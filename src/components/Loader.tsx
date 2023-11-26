import React from 'react'

export default function Loader() {
  return (
    
<div className="flex items-center justify-center w-full h-full absolute left-0 top-0 opacity-70 bg-gray-500">
	<div className="flex justify-center items-center space-x-1 text-xl text-gray-950">
    <svg fill='none' className="w-12 h-12 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
      <path 
        clipRule='evenodd'
        d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
        fill='currentColor' fillRule='evenodd' 
      />
    </svg>
		<div>Loading ...</div>
	</div>
</div>
  )
}
