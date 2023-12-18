import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from '../features/auth/components/Login2'
import HomePage from '../pages/home/HomePage'
// import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";

const PrivateRoutes = () => {
  return (
    <Routes>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/home' />} />
        {/* Pages */}
        <Route path="home" element={<HomePage />} />
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
