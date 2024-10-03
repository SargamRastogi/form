import React from 'react'
import {Link, Outlet , Navigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import axiosClient from '../axios-client'

const DefaultLayout = () => {
    const {user,token,notification,setUser,setToken} = useStateContext()
    if(!token){
        return <Navigate to = "/login"/>
    }
    const OnLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout'
            .then(() => {
                setUser({})
                setToken(null)
            })
        )
    }
    useEffect(() => {
 axiosClient.get('/user')
 .then(({data}) => {
    setUser(data)
 })
    }, [])
  return (
    <div id = "defaultLayout">
        <aside>
            <Link to = "/dashboard">Dashboard</Link>
            <Link to = "/users">Users</Link>
        </aside>
        <div className='content'>
            <header>
                <div>
                    Header
                </div>
                <div>
                    {user.name} &nbsp; &nbsp;
                    <a href = "#" onClick= {OnLogout}className='btn-logout'>Logout</a>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            {notification &&
          <div className="notification">
            {notification}
          </div>
        }
      </div>
    </div>
  )
}

export default DefaultLayout