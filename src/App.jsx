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
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
