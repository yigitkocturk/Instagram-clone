import Header from './chat/components/header'
import React from 'react'
import Reply from './chat/components/reply'
import Message from './chat/components/message'
import Messages from './chat/components/messages'

function Chat() {

    const user = {
        name: 'Yiğit Koçtürk',
        avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg'
    }

    const message = [
        {
            from: {
                id: 'TACoV2wJI9SUytYFUU7PvrEimCu1',
                name: 'Yiğit Koçtürk',
                username: 'yigitkocturk',
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg'
            },
            message: 'Selam'
        },
        {
            from: {
                id: 'FlkmkneTB7dABRtnuVJuSUSa2Du1',
                name: 'Yiğit',
                username: 'kctrk3939',
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg'
            },
            message: 'Selam'
        },
        {
            from: {
                id: 'TACoV2wJI9SUytYFUU7PvrEimCu1',
                name: 'Yiğit Koçtürk',
                username: 'yigitkocturk',
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg'
            },
            message: 'Nasılsın'
        },
        {
            from: {
                id: 'FlkmkneTB7dABRtnuVJuSUSa2Du1',
                name: 'Yiğit',
                username: 'kctrk3939',
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg'
            },
            message: 'İyi, sen nasılsın'
        },
        {
            from: {
                id: 'TACoV2wJI9SUytYFUU7PvrEimCu1',
                name: 'Yiğit Koçtürk',
                username: 'yigitkocturk',
                avatar: 'https://pbs.twimg.com/profile_images/1521770561529171968/Ba1CQyhh_400x400.jpg'
            },
            message: 'iyi'
        }
    ]

    return (
        <div className='flex-1'>
            <Header user={user} />
            <Messages messages={message}/>
            <Reply />
        </div>
    )
}

export default Chat