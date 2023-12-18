import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Navigate, Route, Routes} from 'react-router-dom'
import * as auth from './redux/AuthRedux'
import LoginForm from './components/Login2'

export function Logout() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth.actions.logout())
    window.location.href = '/auth/login';

    // document.location.reload()
  }, [dispatch])

  
  return (
    <div></div>
    // <Routes>
      // <Navigate to='/auth/login' />
  // </Routes>
  )
}
