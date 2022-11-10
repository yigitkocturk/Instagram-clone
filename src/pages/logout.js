import { logout } from '../firebase.js'
import {useEffect} from 'react'

function Logout() {
  return (
    useEffect(() => {
        logout()
    })
  )
  return null
}

export default Logout