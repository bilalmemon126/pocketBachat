import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Dashboard from './pages/Dashboard'
import UploadBill from './pages/UploadBill'
import Analytics from './pages/Analytics'
import HomeLayout from './layout/HomeLayout'
import Login from './pages/Login'
import OtpVerification from './pages/OtpVerification'
import Signup from './pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import BillHistory from './pages/BillHistory'
import ForgotPassword from './pages/ForgotPassword'
import ForgotPasswordOtp from './pages/ForgotPasswordOtp'
import ResetPassword from './pages/ResetPassword'
import ResetPasswordProtectedRoute from './ResetPasswordProtectedRoute'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Signup />
    },
    {
      path: "/otpverification/:id",
      element: <OtpVerification />
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "/forgot-password-otp/:id",
      element: <ForgotPasswordOtp />
    },
    {
      path: "/reset-password/:id",
      element: <ResetPasswordProtectedRoute children={<ResetPassword />} />
    },
    {
      path: "/",
      element: <HomeLayout />
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute children={<AppLayout />} />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/dashboard/:type",
          element: <UploadBill />
        },
        {
          path: "/dashboard/:type/:id",
          element: <UploadBill />
        },
        {
          path: "/dashboard/analytics",
          element: <Analytics />
        },
        {
          path: "/dashboard/history/:billtype",
          element: <BillHistory />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
