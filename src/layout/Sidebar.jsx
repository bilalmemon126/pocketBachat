import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { LayoutDashboard, Upload, BarChart, ClipboardType, History, Zap, Flame, Droplets, ChevronDown, X, Menu, Lock } from "lucide-react"
import logo from '../assets/billyzer logo.png'

const navLinks = [
  { to: "/dashboard", icon: <LayoutDashboard size={17} />, label: "Dashboard", end: true },
  { to: "/dashboard/typemanually", icon: <ClipboardType size={17} />, label: "Type Manually" },
  { to: "/dashboard/uploadbill", icon: <Upload size={17} />, label: "Upload Bill" },
  { to: "/dashboard/analytics", icon: <BarChart size={17} />, label: "Analytics" }
]

const billHistoryLinks = [
  { to: "/dashboard/history/electric", icon: <Zap size={14} />, label: "Electric Bills", color: "text-[oklch(55.7%_0.246_272)]", activeBg: "bg-[oklch(55.7%_0.246_272_/_8%)]", dot: "bg-[oklch(55.7%_0.246_272)]" },
  { to: "/dashboard/history/gas", icon: <Flame size={14} />, label: "Gas Bills", color: "text-[oklch(65%_0.22_15)]", activeBg: "bg-[oklch(65%_0.22_15_/_8%)]", dot: "bg-[oklch(65%_0.22_15)]" },
  { to: "/dashboard/history/water", icon: <Droplets size={14} />, label: "Water Bills", color: "text-[oklch(60%_0.2_230)]", activeBg: "bg-[oklch(60%_0.2_230_/_8%)]", dot: "bg-[oklch(60%_0.2_230)]" },
]

const SidebarNav = ({ onClose }) => {
  const location = useLocation()
  const isHistoryActive = location.pathname.startsWith("/dashboard/history")
  const [historyOpen, setHistoryOpen] = useState(isHistoryActive)

  useEffect(() => {
    if (isHistoryActive) setHistoryOpen(true)
  }, [location.pathname])

  return (
    <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">

      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[oklch(65%_0.02_264)] px-3 mb-2">
        Main Menu
      </p>

      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          onClick={onClose}
          className={({ isActive }) =>
            [
              "group flex items-center gap-3 px-3 py-2.5 rounded-[12px] text-[13px] font-medium transition-all duration-200",
              isActive
                ? "bg-[oklch(55.7%_0.246_272)] text-white shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_30%)]"
                : "text-[oklch(40%_0.02_264)] hover:bg-[oklch(55.7%_0.246_272_/_6%)] hover:text-[oklch(55.7%_0.246_272)]",
            ].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-white" : "text-[oklch(60%_0.02_264)] group-hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"}>
                {link.icon}
              </span>
              {link.label}
            </>
          )}
        </NavLink>
      ))}

      <div className="mt-1">
        <button
          onClick={() => setHistoryOpen(!historyOpen)}
          className={[
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-[12px] text-[13px] font-medium transition-all duration-200",
            isHistoryActive
              ? "bg-[oklch(55.7%_0.246_272_/_8%)] text-[oklch(55.7%_0.246_272)]"
              : "text-[oklch(40%_0.02_264)] hover:bg-[oklch(55.7%_0.246_272_/_6%)] hover:text-[oklch(55.7%_0.246_272)]",
          ].join(" ")}
        >
          <span className={isHistoryActive ? "text-[oklch(55.7%_0.246_272)]" : "text-[oklch(60%_0.02_264)]"}>
            <History size={17} />
          </span>
          <span className="flex-1 text-left">Bill History</span>
          <ChevronDown
            size={14}
            className={[
              "transition-transform duration-250 text-[oklch(65%_0.02_264)]",
              historyOpen ? "rotate-180" : "",
            ].join(" ")}
          />
        </button>

        <div className={[
          "overflow-hidden transition-all duration-300",
          historyOpen ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0",
        ].join(" ")}>
          <div className="ml-4 pl-3 border-l border-[oklch(55.7%_0.246_272_/_12%)] flex flex-col gap-0.5 py-1">
            {billHistoryLinks.map((sub) => (
              <NavLink
                key={sub.to}
                to={sub.to}
                onClick={onClose}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2.5 px-3 py-2 rounded-[10px] text-[12px] font-medium transition-all duration-200",
                    isActive
                      ? `${sub.color} ${sub.activeBg}`
                      : "text-[oklch(55%_0.02_264)] hover:text-[oklch(30%_0.02_264)] hover:bg-gray-50",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive ? sub.color : "text-[oklch(65%_0.02_264)]"}>{sub.icon}</span>
                    {sub.label}
                    {isActive && <span className={["ml-auto size-1.5 rounded-full shrink-0", sub.dot].join(" ")} />}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

    </nav>
  )
}

const Sidebar = ({isOpen, setIsOpen}) => {
  const location = useLocation()

  useEffect(() => { setIsOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "lg:hidden fixed inset-0 z-51 bg-[oklch(20%_0.03_264_/_50%)] backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <div
        className={[
          "lg:hidden fixed top-0 left-0 bottom-0 z-55 flex flex-col",
          "w-[280px] max-w-[85vw] bg-white",
          "shadow-[6px_0_48px_oklch(55.7%_0.246_272_/_12%)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-[oklch(55.7%_0.246_272_/_8%)]">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <div className="w-[100px]">
              <img src={logo} className="w-full" alt="Billyzer" />
            </div>
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="size-9 rounded-[8px] flex items-center justify-center text-[oklch(60%_0.02_264)] hover:bg-[oklch(55.7%_0.246_272_/_8%)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>

        <SidebarNav onClose={() => setIsOpen(false)} />
      </div>

      <aside className="hidden lg:flex w-64 shrink-0 min-h-screen flex-col bg-white border-r border-[oklch(55.7%_0.246_272_/_8%)] shadow-[4px_0_24px_oklch(55.7%_0.246_272_/_5%)]">
        <div className="flex items-center px-5 py-5 border-b border-[oklch(55.7%_0.246_272_/_8%)]">
          <NavLink to="/">
            <div className="w-[110px]">
              <img src={logo} className="w-full" alt="Billyzer" />
            </div>
          </NavLink>
        </div>

        <SidebarNav />
      </aside>
    </>
  )
}

export default Sidebar