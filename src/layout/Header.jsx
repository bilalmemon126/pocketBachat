import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../redux/features/user/userAction"
import { NavLink, useNavigate } from "react-router-dom"
import { ChevronDown, LogOut, Menu, User, X } from "lucide-react"
import logo from '../assets/billyzer logo.png'

const Header = ({ title = "Dashboard", isOpen, setIsOpen }) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const handleLogout = async () => {
    const response = await dispatch(logoutUser())
    if (response.payload.status) {
      localStorage.clear()
      navigate("/login")
    }
  }

  const userName = localStorage.getItem("userName")
  const userEmail = localStorage.getItem("userEmail")

  return (
    <header className="bg-white border-b border-[oklch(55.7%_0.246_272_/_8%)] px-6 py-3.5 flex items-center justify-between shadow-[0_2px_12px_oklch(55.7%_0.246_272_/_5%)]">
      <div className="lg:hidden flex items-center justify-between gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex items-center justify-center size-10 rounded-[10px] text-[oklch(35%_0.03_264)] hover:bg-[oklch(55.7%_0.246_272_/_8%)] hover:text-[oklch(55.7%_0.246_272)] transition-all duration-200"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <NavLink to="/">
          <div className="w-[100px]">
            <img src={logo} className="w-full" alt="Billyzer" />
          </div>
        </NavLink>

      </div>

      <div className="hidden lg:block">
        <h1 className="text-[22px] font-bold text-[oklch(20%_0.03_264)] leading-tight">
          {title}
        </h1>
        <p className="text-[11px] text-[oklch(65%_0.02_264)] mt-0.5">
          Welcome back {userName}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-7 w-px bg-[oklch(55.7%_0.246_272_/_10%)]" />

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-[12px] hover:bg-[oklch(55.7%_0.246_272_/_6%)] transition-all duration-200 group"
          >
            <div className="size-9 rounded-full bg-[oklch(55.7%_0.246_272)] shadow-[0_3px_10px_oklch(55.7%_0.246_272_/_30%)] flex items-center justify-center shrink-0">
              <span className="text-white text-[13px] font-bold">{userName?.slice(0,1).toUpperCase()}</span>
            </div>

            <div className="text-left hidden sm:block">
              <p className="text-[13px] font-semibold text-[oklch(20%_0.03_264)] leading-tight">
                {userName || "User"}
              </p>
              <p className="text-[10px] text-[oklch(65%_0.02_264)]">Premium User</p>
            </div>

            <ChevronDown
              size={14}
              className={[
                "text-[oklch(65%_0.02_264)] transition-transform duration-200",
                showMenu ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-[16px] border border-[oklch(55.7%_0.246_272_/_10%)] shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_12%),0_4px_12px_oklch(0%_0_0_/_6%)] z-50 overflow-hidden">

              <div className="flex items-center gap-3 px-4 py-4 border-b border-[oklch(55.7%_0.246_272_/_8%)]">
                <div className="size-11 rounded-full bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_12px_oklch(55.7%_0.246_272_/_30%)] flex items-center justify-center shrink-0">
                  <span className="text-white text-[14px] font-bold">{userName?.slice(0,1).toUpperCase()}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-[oklch(20%_0.03_264)] truncate">
                    {userName || "User"}
                  </p>
                  <p className="text-[11px] text-[oklch(60%_0.02_264)] truncate">
                    {userEmail || "user@example.com"}
                  </p>
                </div>
              </div>

              <div className="p-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[13px] font-medium text-[oklch(55%_0.22_25)] hover:bg-[oklch(60%_0.22_25_/_8%)] transition-all duration-200"
                >
                  <LogOut size={15} className="shrink-0" />
                  Logout
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header