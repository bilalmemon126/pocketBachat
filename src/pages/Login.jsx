import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../redux/features/user/userAction"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiMail, FiLock } from "react-icons/fi"

function Login() {
  const dispatch = useDispatch()
  const { error, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [input, setInput] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await dispatch(loginUser(input))
    if (response.payload.status) navigate("/")
    setInput({ email: "", password: "" })
  }

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12 overflow-hidden">

      <div className="relative z-10 w-full max-w-[420px]">
        <div className="bg-white rounded-3xl shadow-[0_24px_64px_oklch(55.7%_0.246_272/0.1),0_4px_16px_oklch(0%_0_0/0.05)] border border-[oklch(55.7%_0.246_272/0.08)] px-8 py-10">

          <NavLink to="/" className="flex items-center justify-center gap-2.5 mb-8 group w-fit mx-auto">
            <div className="size-9 rounded-[10px] bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_12px_oklch(55.7%_0.246_272_/_35%)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <svg className="size-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-[17px] tracking-tight text-[oklch(20%_0.03_264)]">
              Money<span className="text-[oklch(55.7%_0.246_272)]">Saver</span>
            </span>
          </NavLink>

          <div className="text-center mb-7">
            <h1 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-1">
              Welcome Back
            </h1>
            <p className="text-[13px] text-[oklch(60%_0.02_264)]">
              Sign in to continue to your dashboard
            </p>
          </div>

          <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[16px] pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  onChange={(e) => setInput(p => ({ ...p, email: e.target.value }))}
                  placeholder="example@gmail.com"
                  required
                  className={[
                    "w-full pl-10 pr-4 py-3 rounded-[12px] text-[14px] text-[oklch(20%_0.03_264)]",
                    "border-2 outline-none transition-all duration-200 bg-gray-50",
                    "placeholder:text-[oklch(70%_0.02_264)]",
                    error
                      ? "border-[oklch(60%_0.22_25)] focus:border-[oklch(55%_0.22_25)] focus:ring-4 focus:ring-[oklch(60%_0.22_25_/_10%)]"
                      : "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
                  ].join(" ")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[16px] pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={input.password}
                  onChange={(e) => setInput(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  required
                  className={[
                    "w-full pl-10 pr-11 py-3 rounded-[12px] text-[14px] text-[oklch(20%_0.03_264)]",
                    "border-2 outline-none transition-all duration-200 bg-gray-50",
                    "placeholder:text-[oklch(70%_0.02_264)]",
                    error
                      ? "border-[oklch(60%_0.22_25)] focus:border-[oklch(55%_0.22_25)] focus:ring-4 focus:ring-[oklch(60%_0.22_25_/_10%)]"
                      : "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
                  ].join(" ")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
                >
                  {showPassword ? <FaEyeSlash className="text-[15px]" /> : <FaEye className="text-[15px]" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end -mt-2">
              <NavLink
                to="/forgot-password"
                className="text-[12px] font-semibold text-[oklch(55.7%_0.246_272)] hover:text-[oklch(50%_0.246_272)] transition-colors duration-200"
              >
                Forgot Password?
              </NavLink>
            </div>

            {error && (
              <div className="flex items-start gap-3 p-4 rounded-[12px] bg-[oklch(60%_0.22_25_/_6%)] border border-[oklch(60%_0.22_25_/_20%)]">
                <svg className="size-4 text-[oklch(55%_0.22_25)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-[13px] font-semibold text-[oklch(40%_0.18_25)]">Login Failed</p>
                  <p className="text-[12px] text-[oklch(50%_0.15_25)] mt-0.5">
                    {error?.message || "Invalid email or password. Please try again."}
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full py-3.5 rounded-[12px] text-[14px] font-semibold text-white bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_45%)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing In…
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign In
                  <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          <p className="text-center text-[13px] text-[oklch(60%_0.02_264)] mt-7">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="font-semibold text-[oklch(55.7%_0.246_272)] hover:text-[oklch(50%_0.246_272)] transition-colors duration-200"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login