import React from "react"
import { NavLink } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"
import { Crosshair, HandCoins, Zap } from "lucide-react"

const benefits = [
  "Free forever",
  "No credit card required",
  "Instant results",
  "100% secure",
]

const miniFeatures = [
  {
    icon:        <Zap className="size-5" />,
    title:       "Instant Analysis",
    description: "Get results in under 30 seconds",
    iconBg:      "bg-[oklch(55.7%_0.246_272_/_10%)]",
    iconColor:   "text-[oklch(55.7%_0.246_272)]",
  },
  {
    icon:        <Crosshair className="size-5" />,
    title:       "Accurate Insights",
    description: "95% accuracy rate guaranteed",
    iconBg:      "bg-[oklch(72%_0.2_145_/_10%)]",
    iconColor:   "text-[oklch(72%_0.2_145)]",
  },
  {
    icon:        <HandCoins className="size-5" />,
    title:       "Real Savings",
    description: "Average savings of ₨2,000/month",
    iconBg:      "bg-[oklch(65%_0.22_15_/_10%)]",
    iconColor:   "text-[oklch(65%_0.22_15)]",
  },
]

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 lg:px-10">

        <div className="bg-white rounded-[28px] shadow-[0_24px_64px_oklch(55.7%_0.246_272_/_10%),0_4px_16px_oklch(0%_0_0_/_5%)] border border-[oklch(55.7%_0.246_272_/_8%)] px-8 py-14 text-center mb-6 relative overflow-hidden">

          <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,oklch(55.7%_0.246_272_/_5%)_0%,transparent_100%)]" />

          <div className="relative mx-auto mb-8 w-fit">
            <div className="absolute inset-0 bg-[oklch(55.7%_0.246_272_/_20%)] rounded-[20px] blur-xl" />
            <div className="relative size-18 rounded-[20px] bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_28px_oklch(55.7%_0.246_272_/_40%)] flex items-center justify-center">
              <svg className="size-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <h2 className="text-[clamp(28px,4vw,52px)] font-bold leading-tight text-[oklch(20%_0.03_264)] mb-4">
            Ready to{" "}
            <span className="italic font-[family-name:var(--font-dm-serif,'Georgia',serif)] font-normal text-[oklch(55.7%_0.246_272)]">
              Save Money?
            </span>
          </h2>

          <p className="text-[15px] leading-relaxed text-[oklch(55%_0.02_264)] max-w-xl mx-auto mb-8">
            Upload your bill now and discover how much you can save every month with our{" "}
            <span className="font-semibold text-[oklch(55.7%_0.246_272)]">AI-powered insights</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[13px] text-[oklch(45%_0.02_264)] font-medium">
                <FaCheckCircle className="text-[oklch(72%_0.2_145)] text-[13px] shrink-0" />
                {b}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <NavLink
              to="/dashboard"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-[14px] bg-[oklch(55.7%_0.246_272)] text-white text-[14px] font-semibold shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_35%)] hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_45%)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started Free
              <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NavLink>

            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-gray-100 text-[oklch(35%_0.03_264)] text-[14px] font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-200">
              <svg className="size-4 text-[oklch(55.7%_0.246_272)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Support
            </button>
          </div>

          <p className="text-[12px] text-[oklch(65%_0.02_264)]">
            Join{" "}
            <span className="font-semibold text-[oklch(55.7%_0.246_272)]">10,000+</span>{" "}
            users who are already saving money
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {miniFeatures.map((f, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 bg-white rounded-[20px] p-5 border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_6%),0_2px_8px_oklch(0%_0_0_/_4%)] hover:border-[oklch(55.7%_0.246_272_/_15%)] hover:shadow-[0_16px_40px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={["size-10 rounded-[10px] flex items-center justify-center shrink-0", f.iconBg, f.iconColor].join(" ")}>
                {f.icon}
              </div>

              <div>
                <p className="text-[14px] font-semibold text-[oklch(20%_0.03_264)] mb-0.5">{f.title}</p>
                <p className="text-[12px] text-[oklch(60%_0.02_264)] leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CallToAction