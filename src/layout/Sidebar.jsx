import { LayoutDashboard, Upload, BarChart, ClipboardType } from "lucide-react"
import './sidebar.css'
import { NavLink } from "react-router-dom"
import { FaBolt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-white to-slate-50 border-r border-slate-200 p-6 space-y-8 min-h-screen flex flex-col">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-md opacity-50"></div>
          <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaBolt className="text-white text-xl" />
          </div>
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
          Money Saver
        </h1>
      </div>

      <nav className="space-y-2 flex-1">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">
          Main Menu
        </p>
        
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `
            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
            ${isActive 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30' 
              : 'text-slate-700 hover:bg-slate-100 hover:text-purple-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              <LayoutDashboard size={18} className={isActive ? 'text-white' : ''} />
              <span className="font-medium">Dashboard</span>
            </>
          )}
        </NavLink>

        <NavLink 
          to="/dashboard/typemanually" 
          className={({ isActive }) => `
            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
            ${isActive 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30' 
              : 'text-slate-700 hover:bg-slate-100 hover:text-purple-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              <ClipboardType size={18} className={isActive ? 'text-white' : ''} />
              <span className="font-medium">Type Manually</span>
            </>
          )}
        </NavLink>

        <NavLink 
          to="/dashboard/uploadbill" 
          className={({ isActive }) => `
            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
            ${isActive 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30' 
              : 'text-slate-700 hover:bg-slate-100 hover:text-purple-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              <Upload size={18} className={isActive ? 'text-white' : ''} />
              <span className="font-medium">Upload Bill</span>
            </>
          )}
        </NavLink>

        <NavLink 
          to="/dashboard/analytics" 
          className={({ isActive }) => `
            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
            ${isActive 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30' 
              : 'text-slate-700 hover:bg-slate-100 hover:text-purple-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              <BarChart size={18} className={isActive ? 'text-white' : ''} />
              <span className="font-medium">Analytics</span>
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar