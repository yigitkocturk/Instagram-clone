import React from 'react'

function Seperator({ label = 'OR' }) {
    return (
        <div className='flex item-center my-2.5 mb-3.5'>
            <div className="h-px  bg-gray-300 flex-1 " />
            <span className="px-4 text-[13px]  text-gray-500 font-semibold">{label}</span>
            <div className="h-px  bg-gray-300 flex-1" />
        </div>
    )
}

export default Seperator