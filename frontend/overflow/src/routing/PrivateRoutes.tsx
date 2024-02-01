import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import RoomForm from '../pages/room/RoomForm'
import Room from '../pages/room/Room'
import EditProfile from '../pages/profile/EditProfile'
// import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";

const PrivateRoutes = () => {
  return (
    <Routes>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/home' />} />
        {/* Pages */}
        <Route path="home" element={<HomePage />} />
        <Route path="createroom" element={<RoomForm />} />
        <Route path="createroom/:roomid" element={<RoomForm />} />
        <Route path="updateuser" element={<EditProfile />} />
        <Route path="room/:roomid" element={<Room />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  )
}

// const SuspensedView: FC = ({ children }) => {
// //   const baseColor = 'getCSSVariableValue('--bs-primary')'
//   const baseColor = '#ADD8E6'

//   TopBarProgress.config({
//     barColors: {
//       '0': baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   });
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export { PrivateRoutes }
