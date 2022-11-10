
import {AiFillCloseCircle} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import classNames from "classnames"
import {useState} from 'react'
function Search() {
  const [open,setOpen] = useState(false)
  return (
    <div className='w-[268px] relative '>
      <span className={classNames({
        "absolute text-[#8e8e8e] pointer-events-none top-0 left-0 h-9 w-9 flex items-center justify-center":true,
        "hidden": open
      })}>
      <FiSearch name="search"/>
      </span>
      <input onFocus={()=> setOpen(true)} onBlur={()=>setOpen(false)} type="text" placeholder="Search" className='h-9 outline-none focus:pl-3 pl-9 w-full rounded bg-[#efefef] '></input>
      <button className={classNames({
        "absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9  items-center justify-center":true,
        "!flex" : open
      })}>
        <AiFillCloseCircle/>
      </button>
    </div>
  )
}

export default Search