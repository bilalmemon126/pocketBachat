import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { FiMail, FiArrowLeft, FiCheck } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { forgotPassword } from "../redux/features/user/userAction"
import logo from '../assets/billyzer logo.png'

export default function ForgotPassword() {
    const dispatch = useDispatch()
    const { user, error, loading } = useSelector((state) => state.user)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return
        let response = await dispatch(forgotPassword({ email }))

        if (response.payload.status) {
            navigate(`/forgot-password-otp/${response.payload.userId}`)
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12 overflow-hidden">

            <div className="relative z-10 w-full max-w-[400px]">
                <div className="bg-white rounded-[24px] shadow-[0_24px_64px_oklch(55.7%_0.246_272_/_10%),0_4px_16px_oklch(0%_0_0_/_5%)] border border-[oklch(55.7%_0.246_272_/_8%)] px-8 py-10">

                    <NavLink to="/" className="group flex items-center justify-center gap-2.5 mb-8 w-fit mx-auto">
                        <div className="w-[100px] md:w-[130px]">
                            <img src={logo} className="w-full" alt="" />
                        </div>
                    </NavLink>

                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[oklch(55.7%_0.246_272_/_15%)] rounded-full blur-xl" />
                            <div className="relative size-16 rounded-full bg-[oklch(55.7%_0.246_272_/_8%)] border border-[oklch(55.7%_0.246_272_/_15%)] flex items-center justify-center">
                                <FiMail className="text-[oklch(55.7%_0.246_272)] text-[24px]" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-7">
                        <h1 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-2">
                            Forgot Password?
                        </h1>
                        <p className="text-[13px] leading-relaxed text-[oklch(60%_0.02_264)] max-w-[270px] mx-auto">
                            Enter your email address and we'll send you an otp to reset your password.
                        </p>
                    </div>

                    <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                                Email Address
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[15px] pointer-events-none" />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-[12px] text-[14px] text-[oklch(20%_0.03_264)]
                                    border-2 border-[oklch(90%_0.01_264)] outline-none transition-all duration-200 bg-gray-50
                                    placeholder:text-[oklch(70%_0.02_264)]
                                    focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group w-full py-3.5 rounded-[12px] text-[14px] font-semibold text-white bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_45%)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Sending…
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Send OTP
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Back to login — always visible */}
                    <div className="flex justify-center mt-6 pt-5 border-t border-[oklch(55.7%_0.246_272_/_8%)]">
                        <NavLink
                            to="/login"
                            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[oklch(55%_0.02_264)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
                        >
                            <FiArrowLeft className="text-[14px]" />
                            Back to Sign In
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}