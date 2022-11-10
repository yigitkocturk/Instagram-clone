/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

function Input({ label, type = 'text', ...props }) {

    const [field] = useField(props)
    const [show, setShow] = useState(false)
    const [Inputtype, setType = useState] = useState(type)

    useEffect(() => {
        if (show) {
            setType('text')
        } else if (type === 'password') {
            setType('password')
        }
    }, [show])

    return (
        <label className=' relative flex border rounded-sm bg-zinc-50 focus-within:border-gray-400'>
            <input type={Inputtype} className={classNames({
                ' px-2 outline-none text-xs bg-transparent w-full h-[38px] ': true,
                "pt-[10px] ": field.value,
            })} {...field} {...props} />
            <small className={classNames({
                'absolute  left-[9px]  cursor-text pointer-events-none  text-gray-400 -translate-y-1/2 transition-all':true,
                "text-xs top-1/2": !field.value,
                "text-[10px] top-2.5 ": field.value,
            })}>{label}</small>
            {type === 'password' && field.value && (
                <div onClick={() => setShow(show => !show)} className='h-full cursor-pointer select-none flex items-center text-sm font-semibold pr-2'>
                    {show ? 'Hide' : 'Show'}
                </div>
            )}
        </label>
    )
}

export default Input