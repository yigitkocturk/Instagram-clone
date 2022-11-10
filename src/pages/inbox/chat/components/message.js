import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'

function Message({message}) {

    const user = useSelector(state => state.auth.user)

  return (

    <div className={classNames({
        "flex gap-x-2" : true,
        "self-end": user.uid === message.from.id
    })}>
        {user.uid !== message.from.id && (
            <img src={message.from.avatar} className='w-6 h-6 rounded-full self-end mb-1' alt="" />
        )}
        <p className='min-h-[44px] inline-flex items-center px-4 text-sm rounded-full border border-gray-200'>
            {message.message}
        </p>
    </div>
  )
}

export default Message