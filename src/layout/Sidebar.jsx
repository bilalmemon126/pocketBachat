import { LayoutDashboard, Upload, BarChart, ClipboardType } from "lucide-react"
import './sidebar.css'
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-600">Money Saver</h1>

      <nav className="space-y-3">
        <NavLink to={"/dashboard"} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to={"/dashboard/typemanually"} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <ClipboardType size={18} /> Type Manually
        </NavLink>
        <NavLink to={"/dashboard/uploadbill"} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Upload size={18} /> Upload Bill
        </NavLink>
        <NavLink to={"/dashboard/analytics"} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <BarChart size={18} /> Analytics
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
