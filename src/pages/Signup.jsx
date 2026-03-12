import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiUser, FiMail, FiLock, FiCheck } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { registerUser } from "../redux/features/user/userAction"

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "Bills Analyzed" },
  { value: "4.9★", label: "User Rating" },
]

const getStrength = (pwd) => {
  if (!pwd) return { score: 0, label: "", color: "" }
  let score = 0
  if (pwd.length >= 8) score++
  if (/[A-Z]/.test(pwd)) score++
  if (/[0-9]/.test(pwd)) score++
  if (/[^A-Za-z0-9]/.test(pwd)) score++
  const map = [
    { label: "", color: "" },
    { label: "Weak", color: "bg-[oklch(60%_0.22_25)]" },
    { label: "Fair", color: "bg-[oklch(75%_0.18_65)]" },
    { label: "Good", color: "bg-[oklch(60%_0.2_230)]" },
    { label: "Strong", color: "bg-[oklch(72%_0.2_145)]" },
  ]
  return { score, ...map[score] }
}

const requirements = [
  { label: "At least 8 characters", test: (p) => p?.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
  { label: "One special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
]


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [input, setInput] = useState({})

  const handleInput = (e) => setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const strength = getStrength(input.password)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await dispatch(registerUser(input))
    if (response.payload.status) {
      navigate(`/otpverification/${response.payload.data._id}`)
    }
  }

  const inputBase = [
    "w-full py-3 rounded-[12px] text-[14px] text-[oklch(20%_0.03_264)]",
    "border-2 outline-none transition-all duration-200 bg-gray-50",
    "placeholder:text-[oklch(70%_0.02_264)]",
    "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
  ].join(" ")

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="hidden lg:flex flex-col">

            <NavLink to="/" className="group flex items-center gap-2.5 mb-10 w-fit">
              <div className="size-9 rounded-[10px] bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_12px_oklch(55.7%_0.246_272_/_35%)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <svg className="size-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-bold text-[17px] tracking-tight text-[oklch(20%_0.03_264)]">
                Money<span className="text-[oklch(55.7%_0.246_272)]">Saver</span>
              </span>
            </NavLink>

            <h1 className="text-[clamp(28px,3.5vw,42px)] font-bold leading-tight text-[oklch(20%_0.03_264)] mb-4">
              Start Saving{" "}
              <span className="italic font-[family-name:var(--font-dm-serif,'Georgia',serif)] font-normal text-[oklch(55.7%_0.246_272)]">
                Money
              </span>{" "}Today
            </h1>
            <p className="text-[15px] leading-relaxed text-[oklch(55%_0.02_264)] mb-8 max-w-sm">
              Join thousands of users who are already saving money with our AI-powered bill analysis platform.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[oklch(55.7%_0.246_272_/_10%)]">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-[22px] font-bold text-[oklch(55.7%_0.246_272)]">{s.value}</span>
                  <span className="text-[11px] text-[oklch(60%_0.02_264)]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-[24px] shadow-[0_24px_64px_oklch(55.7%_0.246_272_/_10%),0_4px_16px_oklch(0%_0_0_/_5%)] border border-[oklch(55.7%_0.246_272_/_8%)] px-8 py-10">

              <NavLink to="/" className="group flex items-center justify-center gap-2.5 mb-7 w-fit mx-auto lg:hidden">
                <div className="size-9 rounded-[10px] bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_12px_oklch(55.7%_0.246_272_/_35%)] flex items-center justify-center">
                  <svg className="size-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-bold text-[17px] tracking-tight text-[oklch(20%_0.03_264)]">
                  Money<span className="text-[oklch(55.7%_0.246_272)]">Saver</span>
                </span>
              </NavLink>

              <div className="text-center mb-7">
                <h2 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-1">Create Account</h2>
                <p className="text-[13px] text-[oklch(60%_0.02_264)]">Get started with your free account</p>
              </div>

              <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[15px] pointer-events-none" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      onChange={handleInput}
                      placeholder="Full Name"
                      required
                      className={`${inputBase} pl-10 pr-4`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[15px] pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleInput}
                      placeholder="example@gmail.com"
                      required
                      className={`${inputBase} pl-10 pr-4`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="password" className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                    Password
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[15px] pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      onChange={handleInput}
                      placeholder="••••••••"
                      required
                      className={`${inputBase} pl-10 pr-11`}
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

                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={[
                          "h-1 flex-1 rounded-full transition-all duration-300",
                          i <= strength.score ? strength.color : "bg-gray-200",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                  {strength.label && (
                    <p className={[
                      "text-[11px] font-semibold",
                      strength.score <= 1 ? "text-[oklch(55%_0.22_25)]" :
                        strength.score === 2 ? "text-[oklch(60%_0.15_65)]" :
                          strength.score === 3 ? "text-[oklch(45%_0.18_230)]" :
                            "text-[oklch(40%_0.15_145)]",
                    ].join(" ")}>
                      {strength.label} password
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-1.5 p-4 rounded-[12px] bg-gray-50 border border-[oklch(55.7%_0.246_272_/_8%)]">
                  {requirements.map((req) => {
                    const met = req.test(input.password)
                    return (
                      <div key={req.label} className="flex items-center gap-1.5 text-[11px]">
                        <div className={[
                          "size-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200",
                          met
                            ? "bg-[oklch(72%_0.2_145_/_15%)]"
                            : "bg-gray-200",
                        ].join(" ")}>
                          {met
                            ? <FiCheck size={9} className="text-[oklch(40%_0.15_145)]" strokeWidth={3} />
                            : <span className="size-1 rounded-full bg-gray-400" />
                          }
                        </div>
                        <span className={met ? "text-[oklch(35%_0.02_264)]" : "text-[oklch(65%_0.02_264)]"}>
                          {req.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <button
                  type="submit"
                  className="group w-full py-3.5 rounded-[12px] text-[14px] font-semibold text-white bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_45%)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Create Account
                  <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>

              <p className="text-center text-[13px] text-[oklch(60%_0.02_264)] mt-7">
                Already have an account?{" "}
                <NavLink to="/login" className="font-semibold text-[oklch(55.7%_0.246_272)] hover:text-[oklch(50%_0.246_272)] transition-colors duration-200">
                  Sign In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register