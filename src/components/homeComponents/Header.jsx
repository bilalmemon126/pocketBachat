import React, { useState, useEffect } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { logoutUser } from "../../redux/features/user/userAction"
import { useDispatch } from "react-redux"
import logo from '../../assets/billyzer logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const handleNavLinkClick = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault()
      const id = path.replace("/#", "")
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      } else {
        navigate("/")
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100)
      }
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMobileMenuOpen])

  const handleLogout = async () => {
    const response = await dispatch(logoutUser())
    if (response.payload.status) {
      localStorage.clear()
      navigate("/login")
    }
  }

  const navLinks = [
    { name: "Home", path: "/#hero" },
    { name: "Features", path: "/#features" },
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Testimonials", path: "/#testimonials" },
  ]

  const isLoggedIn = !!localStorage.getItem("userId")

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-[var(--font-dm-sans),sans-serif]",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_oklch(55.7%_0.246_272/0.08),0_1px_4px_oklch(0%_0_0/0.04)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-20">

            <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-[100px] md:w-[130px]">
                <img src={logo} className="w-full" alt="" />
              </div>
            </NavLink>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                  className="relative text-[14px] font-medium transition-colors duration-200
                    after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[2px]
                    after:rounded-full after:bg-[oklch(55.7%_0.246_272)]
                    after:origin-left after:transition-transform after:duration-250
                    after:scale-x-0 hover:after:scale-x-100
                    text-[oklch(35%_0.03_264)] hover:text-[oklch(55.7%_0.246_272)]"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className={[
                    "px-5 py-2.5 rounded-[12px] text-[14px] font-medium transition-all duration-200",
                    "text-[oklch(35%_0.03_264)] hover:bg-[oklch(93%_0.025_264)] hover:text-[oklch(55.7%_0.246_272)]"
                  ].join(" ")}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="px-5 py-2.5 rounded-[12px] text-[14px] font-medium transition-all duration-200
                    text-[oklch(35%_0.03_264)] hover:bg-[oklch(93%_0.025_264)] hover:text-[oklch(55.7%_0.246_272)]"
                >
                  Sign In
                </NavLink>
              )}

              <NavLink
                to="/dashboard"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[oklch(55.7%_0.246_272)] text-white text-[14px] font-semibold shadow-[0_6px_20px_oklch(55.7%_0.246_272_/_30%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_8px_28px_oklch(55.7%_0.246_272_/_40%)] hover:-translate-y-0.5"
              >
                Get Started
              </NavLink>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center size-10 rounded-[10px] transition-all duration-200
                text-[oklch(35%_0.03_264)] hover:bg-[oklch(93%_0.025_264)]"
            >
              {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>

          </div>
        </nav>
      </header>

      <div
        onClick={() => setMobileMenuOpen(false)}
        className={[
          "lg:hidden fixed inset-0 z-51 bg-[oklch(20%_0.03_264_/_50%)] backdrop-blur-sm transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-55 flex flex-col
          w-[300px] max-w-[85vw] bg-white
          shadow-[-16px_0_48px_oklch(55.7%_0.246_272_/_12%)]
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`
        }
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[oklch(55.7%_0.246_272_/_8%)]">
          <div className="flex items-center gap-2.5">
            <div className="w-[100px] md:w-[130px]">
              <img src={logo} className="w-full" alt="" />
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="size-9 rounded-[8px] flex items-center justify-center text-[oklch(60%_0.02_264)] hover:bg-[oklch(93%_0.025_264)] transition-colors duration-200"
          >
            <FaTimes className="text-base" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 pt-5 pb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[oklch(70%_0.02_264)] mb-4">
            Navigation
          </p>
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={(e) => handleNavLinkClick(e, link.path)}
              className="group flex items-center gap-3 py-3.5
                border-b border-[oklch(55.7%_0.246_272_/_8%)]
                text-[15px] font-medium transition-all duration-200
                hover:text-[oklch(55.7%_0.246_272)] hover:pl-1.5
                text-[oklch(30%_0.03_264)]"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 pt-4 pb-8 border-t border-[oklch(55.7%_0.246_272_/_8%)] flex flex-col gap-3">
          {isLoggedIn ? (
            <button
              onClick={() => { handleLogout(); setMobileMenuOpen(false) }}
              className="w-full py-3 rounded-[12px] text-[14px] font-medium text-[oklch(35%_0.03_264)] bg-[oklch(93%_0.025_264)] hover:bg-[oklch(90%_0.03_264)] transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 rounded-[12px] text-[14px] font-medium text-[oklch(35%_0.03_264)] bg-[oklch(93%_0.025_264)] hover:bg-[oklch(90%_0.03_264)] transition-colors duration-200"
            >
              Sign In
            </NavLink>
          )}

          <NavLink
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center justify-center gap-2 w-full py-3 rounded-[12px] text-[14px] font-semibold bg-[oklch(55.7%_0.246_272)] text-white shadow-[0_6px_20px_oklch(55.7%_0.246_272_/_30%)] hover:bg-[oklch(50%_0.246_272)] transition-all duration-200"
          >
            Get Started
          </NavLink>
          
        </div>
      </div>
    </>
  )
}

export default Header