import Icon from 'components/Icons'
import React from 'react'

function Header({ user }) {
    return (
        <header className='h-[60px] border-b border-gray-300 flex items-center justify-between px-6'>
            <button className='flex items-center gap-x-4'>
                <img src={user.avatar} alt="" className='w-6 h-6 rounded-full' />
                <h6 className='text-base font-semibold'>{user.name}</h6>
            </button>
            <button>
                <Icon name="info" size={24} />
            </button>

        </header>
    )
}

export default Header