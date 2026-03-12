import React, { useState } from "react"
import { useNavigate, useParams, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { otpVerification } from "../redux/features/user/userAction"
import { FiShield } from "react-icons/fi"

function OtpVerification() {
  const { id }    = useParams()
  const dispatch  = useDispatch()
  const navigate  = useNavigate()
  const { error, loading } = useSelector((state) => state.user)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return
    const next = [...otp]
    next[index] = element.value
    setOtp(next)
    if (element.value && element.nextSibling) element.nextSibling.focus()
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData("text").slice(0, 6)
    const next   = [...otp]
    for (let i = 0; i < pasted.length; i++) {
      if (!isNaN(pasted[i])) next[i] = pasted[i]
    }
    setOtp(next)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const otpString = otp.join("")
    if (otpString.length !== 6) return
    const response = await dispatch(otpVerification({ userId: id, otp: otpString }))
    if (response.payload.status) navigate("/")
  }

  const filled = otp.join("").length

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12 overflow-hidden">

      <div className="relative z-10 w-full max-w-[400px]">
        <div className="bg-white rounded-[24px] shadow-[0_24px_64px_oklch(55.7%_0.246_272_/_10%),0_4px_16px_oklch(0%_0_0_/_5%)] border border-[oklch(55.7%_0.246_272_/_8%)] px-8 py-10">

          <NavLink to="/" className="group flex items-center justify-center gap-2.5 mb-8 w-fit mx-auto">
            <div className="size-9 rounded-[10px] bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_12px_oklch(55.7%_0.246_272_/_35%)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <svg className="size-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-[17px] tracking-tight text-[oklch(20%_0.03_264)]">
              Money<span className="text-[oklch(55.7%_0.246_272)]">Saver</span>
            </span>
          </NavLink>

          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[oklch(55.7%_0.246_272_/_15%)] rounded-full blur-xl" />
              <div className="relative size-16 rounded-full bg-[oklch(55.7%_0.246_272_/_8%)] border border-[oklch(55.7%_0.246_272_/_15%)] flex items-center justify-center">
                <FiShield className="text-[oklch(55.7%_0.246_272)] text-[26px]" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="text-center mb-7">
            <h1 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-2">
              Verify Your Account
            </h1>
            <p className="text-[13px] leading-relaxed text-[oklch(60%_0.02_264)] max-w-[280px] mx-auto">
              We've sent a 6-digit verification code to your email address.
            </p>
          </div>

          <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="flex justify-center gap-2.5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  className={[
                    "size-12 text-center text-[20px] font-bold rounded-[12px]",
                    "border-2 outline-none transition-all duration-200 bg-gray-50",
                    "text-[oklch(20%_0.03_264)]",
                    digit
                      ? "border-[oklch(55.7%_0.246_272)] bg-[oklch(55.7%_0.246_272_/_5%)]"
                      : "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5">
              {otp.map((_, i) => (
                <span
                  key={i}
                  className={[
                    "rounded-full transition-all duration-200",
                    i < filled
                      ? "size-2 bg-[oklch(55.7%_0.246_272)]"
                      : "size-1.5 bg-[oklch(85%_0.01_264)]",
                  ].join(" ")}
                />
              ))}
            </div>

            {error && (
              <div className="flex items-start gap-3 p-4 rounded-[12px] bg-[oklch(60%_0.22_25_/_6%)] border border-[oklch(60%_0.22_25_/_20%)]">
                <svg className="size-4 text-[oklch(55%_0.22_25)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-[13px] font-semibold text-[oklch(40%_0.18_25)]">Verification Failed</p>
                  <p className="text-[12px] text-[oklch(50%_0.15_25)] mt-0.5">
                    {error?.message || "Invalid OTP. Please try again."}
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || filled !== 6}
              className="group w-full py-3.5 rounded-[12px] text-[14px] font-semibold text-white bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_45%)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Verifying…
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verify Account
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OtpVerification