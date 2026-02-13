import React, { useState, useEffect } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom" // Added useNavigate & useLocation
import { FaBars, FaTimes } from "react-icons/fa"
import { logoutUser } from "../../redux/features/user/userAction"
import { useDispatch } from "react-redux"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation();

  const handleNavLinkClick = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const id = path.replace("/#", "");
      
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
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
    { name: "Testimonials", path: "/#testimonials" }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to={"/"} className={({isActive}) => `${isActive ? "bg-transparent" : ""}`}>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled 
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent" 
                  : "text-white"
              }`}>
              Money Saver
            </span>
          </NavLink>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={(e) => handleNavLinkClick(e, link.path)}
                className={({ isActive }) => `
                  relative font-medium transition-all duration-300
                  ${isScrolled ? "text-slate-700" : "text-white/90"}
                  hover:text-purple-600
                  ${isActive && !link.path.includes('#') ? "text-purple-600" : ""}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {
              localStorage.getItem("userId") ?
            <button className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            onClick={handleLogout}
            >
              Logout
            </button>
            :
            <NavLink to="/login" className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}>
              Sign In
            </NavLink>
            }
            <NavLink to="/dashboard" className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Get Started</span>
            </NavLink>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-lg transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ top: "80px" }}>
        <div className="h-full overflow-y-auto px-4 py-8 space-y-6">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={(e) => handleNavLinkClick(e, link.path)}
              className={({ isActive }) => `block text-xl font-semibold py-3 border-b border-white/10 ${isActive && !link.path.includes('#') ? "text-purple-400" : "text-white"}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header