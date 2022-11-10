import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Chatlist() {

    const {conversationId} = useParams()
    const chats = [
        {
            id: 1,
            user: {
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg',
                name: 'Yiğit Koçtürk'
            },
            lastMessage: 'Selam Yiğit!'
        },
        {
            id: 2,
            user: {
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg',
                name: 'Ahmet Mehmet'
            },
            lastMessage: 'bir video gönderdi'
        },
        {
            id: 3,
            user: {
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg',
                name: 'Mehmet Ahmet'
            },
            lastMessage: 'bir fotoğraf gönderdi'
        }
    ]

    return (
        <div className='h-[calc(100%-60px)] overflow-auto py-3 '>
            <header className='flex items-center justify-between px-5 mb-1'>
                <h6 className='text-base font-semibold'>Messages</h6>
                <button className='text-brand text-sm font-semibold'>16 requests</button>
            </header>
            {chats.map(chat => (
                <NavLink
                    className="h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5"
                    key={chat.id}
                    to={`/inbox/${chat.id}`} >
                    <img src={chat.user.avatar} alt="" className='w-14 h-14 rounded-full' />
                    <div>
                        <h6 className='text-sm'>{chat.user.name}</h6>
                        <p className='text-sm text-[#8e8e8e]'>{chat.lastMessage}</p>
                    </div>
                    
                </NavLink>
            ))}
        </div>
    )
}

export default Chatlist